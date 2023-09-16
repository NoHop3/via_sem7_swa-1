import React, { useState, useEffect } from "react";
import { Carousel } from "../components/carousel/carousel";
import { Data } from "../utils/types";

interface HistoricalDataProps {
  title: string;
  data: Data[];
}

export const DataDisplay = (props: HistoricalDataProps) => {
  const { title, data } = props;
  const [dataCopy, setdataCopy] = useState([] as Data[]);
  const [showSize, setShowSize] = useState(5);
  const [width, setWidth] = useState(1500);
  const [height, setHeight] = useState(450);
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => {
    if (currentPage > 1 && currentPage <= data.length / showSize) {
      setCurrentPage(currentPage - 1);
    } else {
      alert("You are on the first page!");
    }
  };

  const nextPage = () => {
    if (currentPage < data.length / showSize) {
      setCurrentPage(currentPage + 1);
    } else {
      alert("You are on the last page!");
    }
  };

  useEffect(() => {
    const start = currentPage * showSize;
    const end = start + showSize;
    setdataCopy(data.slice(start, end));
  }, [currentPage, showSize, data]);

  const handleShowSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSize(parseInt(event.target.value));
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    fetch(`http://localhost:8080/data/${event.target.value}`)
      .then((response) => response.json())
      .then((data) => {
        let i = data.reverse();
        setdataCopy(
          i.slice(currentPage * showSize, currentPage * showSize + showSize)
        );
      });
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let filteredData = data.filter((item) => item.type === event.target.value);
    setdataCopy(
      filteredData.slice(
        currentPage * showSize,
        currentPage * showSize + showSize
      )
    );
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(parseInt(event.target.value));
  };

  const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHeight(parseInt(event.target.value));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <div style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
        <p>Set number of grid items: </p>
        <input
          onChange={handleShowSizeChange}
          type='number'
          placeholder='Enter number of cards to show'
          value={showSize}
        />
      </div>
      <div style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
        <p>Set width: </p>
        <input
          onChange={handleWidthChange}
          type='number'
          placeholder='Enter width'
          value={width}
        />
      </div>
      <div style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
        <p>Set height: </p>
        <input
          onChange={handleHeightChange}
          type='number'
          placeholder='Enter height'
          value={height}
        />
      </div>
      <br />
      <div style={{ display: "inline-flex", whiteSpace: "pre-wrap" }}>
        <p>Filter by city: </p>
        <select id='place' name='place' onChange={handleCityChange}>
          <option value=''>None</option>
          <option value='Horsens'>Horsens</option>
          <option value='Copenhagen'>Copenhagen</option>
          <option value='Aarhus'>Aarhus</option>
        </select>
      </div>
      <div>
        <p>Filter by measurement type: </p>
        <select id='type' name='type' onChange={handleTypeChange}>
          <option value=''>None</option>
          <option value='temperature'>Temperature</option>
          <option value='cloud coverage'>Cloud coverage</option>
          <option value='precipitation'>Precipitation</option>
          <option value='wind speed'>Wind speed</option>
        </select>
      </div>

      <Carousel
        data={dataCopy}
        showSize={showSize}
        prevPage={prevPage}
        nextPage={nextPage}
        width={width}
        height={height}
      />
    </div>
  );
};
