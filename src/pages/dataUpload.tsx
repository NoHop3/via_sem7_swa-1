import React, { useState } from "react";

export const DataUpload = () => {
  const [form, setForm] = useState({
    place: "",
    type: "",
    unit: "",
    direction: "",
    value: 0,
    precipitation_type: "",
    time: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resetWindDirectionOrPrecipitationType();

    const data = new FormData(event.currentTarget);
    const formEntries = Object.fromEntries(data.entries());
    formEntries.time = new Date().toISOString();
    fetch("http://localhost:8080/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEntries),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleFormChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetWindDirectionOrPrecipitationType = () => {
    if (form.type !== "wind speed") {
      setForm({
        ...form,
        direction: "",
      });
    }
    if (form.type !== "precipitation") {
      setForm({
        ...form,
        precipitation_type: "",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}>
        <label>
          Place:
          <input
            type='text'
            name='place'
            value={form.place}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Type of measurement:
          <select name='type' value={form.type} onChange={handleFormChange}>
            <option value='temperature'>Temperature</option>
            <option value='cloud coverage'>Cloud coverage</option>
            <option value='precipitation'>Precipitation</option>
            <option value='wind speed'>Wind speed</option>
          </select>
        </label>
        <label>
          Type of unit:
          <select name='unit' value={form.unit} onChange={handleFormChange}>
            <option value='C'>Celsius</option>
            <option value='mm'>Milimeters</option>
            <option value='%'>Percentage</option>
            <option value='m/s'>Meters / Seconds</option>
          </select>
        </label>
        {form.type === "wind speed" && (
          <label>
            Direction:
            <select
              name='direction'
              value={form.direction}
              onChange={handleFormChange}>
              <option value='North'>North</option>
              <option value='Northeast'>Northeast</option>
              <option value='Northwest'>Northwest</option>
              <option value='Southwest'>Southwest</option>
              <option value='Southeast'>Southeast</option>
              <option value='South'>South</option>
              <option value='East'>East</option>
              <option value='West'>West</option>
            </select>
          </label>
        )}
        {form.type === "precipitation" && (
          <label>
            Type of precipitation:
            <select
              name='precipitation_type'
              value={form.precipitation_type}
              onChange={handleFormChange}>
              <option value='rain'>Rain</option>
              <option value='snow'>Snow</option>
              <option value='sleet'>Sleet</option>
              <option value='hail'>Hail</option>
            </select>
          </label>
        )}
        <label>
          Value:
          <input
            type='number'
            name='value'
            value={form.value}
            onChange={handleFormChange}
          />
        </label>
        <input type='submit' value='Submit' style={{ width: "150px" }} />
      </form>
    </div>
  );
};
