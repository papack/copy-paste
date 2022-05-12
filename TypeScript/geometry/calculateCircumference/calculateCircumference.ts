/*
This function calculates the circumference of a circle (ger: Kreisumfang)
*/

export const calculateCircumference = (radius: number): number => {
  if (radius < 0) {
    throw new Error("radius must be greater than 0");
  }

  return 2 * Math.PI * radius;
};
