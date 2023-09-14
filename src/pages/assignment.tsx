import React, { useState, useEffect } from "react";
import { Carousel } from "../components/carousel/carousel";
import { ForecastData } from "../utils/types";

export const Assignment = () => {
  const [forecastData, setForecastData] = useState([] as ForecastData[]);

    useEffect(() => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=sofia&appid=3e3b0b7b0b0b0b0b0b0b0b0b0b0b0b0b")
        .then((response) => response.json())
        .then((data) => setForecastData(data));
    }, [forecastData]);

  return (
    <div>
      <h1>Assignment</h1>
      <p>Authors: Stefan Georgiev 304284, Lyuboslav Kotsev</p>
      <Carousel data={forecastData} />
    </div>
  );
};
