import { Data } from "../../utils/types";

export type CarouselProps = {
  data: Data[];
  height?: number;
  width?: number;
  autoPlay?: boolean;
  showSize?: number;
  prevPage: () => void;
  nextPage: () => void;
};
