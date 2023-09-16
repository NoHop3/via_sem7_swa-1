import { useEffect, useState } from "react";
import { Data } from "../utils/types";
import { DataDisplay } from "./dataDisplay";
import { DataUpload } from "./dataUpload";

const fetchData = (url: string, callback: (data: Data[]) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const data: Data[] = JSON.parse(xhr.responseText);
      callback(data);
    } else {
      console.error("Request failed with status:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("Request failed");
  };

  xhr.send();
};

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
    fetchData("http://localhost:8080/forecast", (data) => {
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
