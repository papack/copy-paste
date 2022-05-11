import { AnglePosLengthToNewPosProps } from "./interfaces";

export const anglePosLengthToNewPos = ({
  angle,
  length,
  xFrom = 0,
  yFrom = 0,
}: AnglePosLengthToNewPosProps) => {
  //calculate radian
  const theta = ((90 - angle) * Math.PI) / 180;

  //calculate new x and y and round to 2 decimal places to avoid floating point errors
  let newXPos = Number((xFrom + length * Math.cos(theta)).toFixed(5));
  let newYPos = Number((yFrom + length * Math.sin(theta)).toFixed(5));

  //fix -0 to 0
  if (newXPos == -0) newXPos = 0;
  if (newYPos == -0) newYPos = 0;

  //return value
  return {
    x: newXPos,
    y: newYPos,
  };
};
