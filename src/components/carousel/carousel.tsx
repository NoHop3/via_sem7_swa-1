import React, { useState, useEffect, useCallback } from "react";
import { Image } from "../../utils/types";
import { CarouselProps } from "./carousel.props";
import WeatherCard from "../weathercard"; // Import your WeatherCard component
import {
  CarouselStyledWrapper,
  CarouselStyled,
  CarouselButtonsWrapper,
  CarouselButton,
} from "./carousel.styles";

export const Carousel = (props: CarouselProps) => {
  const { data, width, autoPlay, height, showSize } = props;
  const [images, setImages] = useState([] as Image[]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=5")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((currentImage + 1) % images.length);
  }, [currentImage, images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }, [currentImage, images.length]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoPlay) {
      interval = setInterval(() => {
        nextImage();
      }, 3000); // Adjust the interval duration as needed

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  }, [autoPlay, nextImage]);

  return (
    <CarouselStyledWrapper width={width ?? 700} height={height ?? 400}>
      <CarouselStyled>
        {data.slice(0, showSize).map((entry, index) => (
          <WeatherCard
            key={index}
            onClick={() => {
              console.log(`Clicked on card ${index}`);
            }}
            {...entry}
          />
        ))}
      </CarouselStyled>
      <CarouselButtonsWrapper>
        <CarouselButton onClick={prevImage}>Prev</CarouselButton>
        <CarouselButton onClick={nextImage}>Next</CarouselButton>
      </CarouselButtonsWrapper>
    </CarouselStyledWrapper>
  );
};
