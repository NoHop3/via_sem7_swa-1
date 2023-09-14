export type ForecastData = {
  id: number;
  city: {
    name: string;
    country: string;
  };
  image: Image;
  date: string;
  time: string;
  temperature: number;
  humidity: number;
  wind: number;
  pressure: number;
};
export type Image = {
  src: string;
  alt: string;
};
