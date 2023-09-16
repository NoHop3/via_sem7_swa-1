import { useEffect, useState } from "react";
import { Data } from "../utils/types";
import { DataDisplay } from "./dataDisplay";
import { DataUpload } from "./dataUpload";

export const Assignment = () => {
  const [historicalData, setHistoricalData] = useState([] as Data[]);
  const [forecastData, setForecastData] = useState([] as Data[]);
  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => response.json())
      .then((data) => {
        let i = data.reverse();
        setHistoricalData(i);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/forecast")
      .then((response) => response.json())
      .then((data) => {
        let i = data.reverse();
        setForecastData(i);
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <DataDisplay title='Historical Data' data={historicalData} />
      <DataDisplay title='Forecast Data' data={forecastData} />
      <DataUpload />
      <p>Authors: Stefan Georgiev, Lyuboslav Kotsev</p>
    </div>
  );
};
