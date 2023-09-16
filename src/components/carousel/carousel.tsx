import React from "react";
import { CarouselProps } from "./carousel.props";
import WeatherCard from "../weathercard"; // Import your WeatherCard component
import {
  CarouselStyledWrapper,
  CarouselStyled,
  CarouselButtonsWrapper,
  CarouselButton,
} from "./carousel.styles";

export const Carousel = (props: CarouselProps) => {
  const { data, width, height, showSize, prevPage, nextPage } = props;

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
        <CarouselButton onClick={prevPage}>Prev</CarouselButton>
        <CarouselButton onClick={nextPage}>Next</CarouselButton>
      </CarouselButtonsWrapper>
    </CarouselStyledWrapper>
  );
};
