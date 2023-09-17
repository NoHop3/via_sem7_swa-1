import { WeatherCardProps } from "./weathercard.props";
import {
  WeatherCardImage,
  WeatherCardInfo,
  WeatherCardWrapper,
} from "./weathercard.styles";
import { ISOStringToDateString } from "./weathercard.utils";

export const WeatherCard = (props: WeatherCardProps) => {
  return (
    <WeatherCardWrapper onClick={props.onClick}>
      <h3>{props.place}</h3>
      <WeatherCardImage
        src={
          props.src ||
          "https://st4.depositphotos.com/17828278/24401/v/450/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"
        }
        alt={props.alt || "Location place"}
      />
      <WeatherCardInfo>
        <p>
          {props.value
            ? `${props.type}: ${props.value} ${props.unit}`
            : `${props.type}: from ${props.from} to ${props.to} ${props.unit}`}
        </p>
        <p>{ISOStringToDateString(props.time)}</p>
      </WeatherCardInfo>
    </WeatherCardWrapper>
  );
};
