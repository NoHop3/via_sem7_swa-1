import { ForecastData } from "../../utils/types";

export type CarouselProps = {
  data: ForecastData[];
  height?: number;
  width?: number;
  autoPlay?: boolean;
  showSize?: number;
};
