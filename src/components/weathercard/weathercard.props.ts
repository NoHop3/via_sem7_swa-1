import { ForecastData } from "../../utils/types";

export type WeatherCardProps = ForecastData & {
    onClick: () => void;
};