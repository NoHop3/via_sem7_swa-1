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
  const [historicalData, setHistoricalData] = useState<Data[]>([]);
  const [forecastData, setForecastData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/data")
      .then((response) => response.json())
      .then((data: Data[]) => {
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
      <div>
        <p>
          Minimum temp for the day:
          {historicalData.reduce(
            (min, p) =>
              p.value !== null && p.value && p.value < min ? p.value : min,
            historicalData[0]?.value ?? 0
          )}
        </p>
        <p>
          Maximum temp for the day:
          {historicalData.reduce(
            (max, p) =>
              p.value !== null && p.value && p.value > max ? p.value! : max,
            historicalData[0]?.value ?? 0
          )}
        </p>
        <p>
          Average wind speed for the last day:
          {(() => {
            const windSpeedData = historicalData.filter(
              (item) => item.type === "wind speed"
            );
            if (windSpeedData.length === 0) {
              return "No wind speed data available";
            }

            const sum = windSpeedData.reduce(
              (total, data) =>
                data.value !== null ? total + data.value! : total,
              0
            );

            const average = sum / windSpeedData.length;
            return isNaN(average) ? "N/A" : average.toFixed(2); // Display "N/A" if average is NaN
          })()}
        </p>
        <p>
          Total precipitation for the last day:
          {(() => {
            const precipitationData = historicalData.filter(
              (item) => item.type === "precipitation"
            );
            if (precipitationData.length === 0) {
              return "No precipitation data available";
            }

            const sum = precipitationData.reduce(
              (total, data) =>
                data.value !== null ? total + data.value! : total,
              0
            );

            return isNaN(sum) ? "N/A" : sum.toFixed(2); // Display "N/A" if average is NaN
          })()}
        </p>
      </div>
      <DataDisplay title='Forecast Data' data={forecastData} />
      <DataUpload />
      <p>Authors: Stefan Georgiev, Lyuboslav Kotsev</p>
    </div>
  );
};
