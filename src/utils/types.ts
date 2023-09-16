export type Data = Image & {
  value?: number;
  type: string;
  unit: string;
  time: string;
  place: string;
  precipitation_type?: string;
  precipation_types?: string[];
  direction?: string;
  directions?: string[];
  from?: number;
  to?: number;
};

export type Image = {
  src: string;
  alt: string;
};
