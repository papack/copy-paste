export const scale = (
  value: number,
  fromMin: number,
  fromMax: number,
  toMin: number,
  toMax: number
) => {
  //value must be between fromMin and fromMax
  if (value < fromMin || value > fromMax) {
    throw new Error(`value must be between ${fromMin} and ${fromMax}`);
  }

  return ((value - fromMin) * (toMax - toMin)) / (fromMax - fromMin) + toMin;
};
