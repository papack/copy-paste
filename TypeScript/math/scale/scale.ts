import { ScaleProps } from "./interfaces";

export const scale = ({
  value,
  fromMin,
  fromMax,
  toMin,
  toMax,
}: ScaleProps) => {
  //value must be between fromMin and fromMax
  if (value < fromMin || value > fromMax) {
    throw new Error(`value must be between ${fromMin} and ${fromMax}`);
  }

  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
};
