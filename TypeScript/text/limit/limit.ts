import { Options } from "./interfaces";

export const limit = (text: string, { maxChars = 160 }: Options = {}) => {
  //only allow positive maxChars
  if (maxChars <= 0) {
    throw new Error("maxChars must be greater than 0");
  }

  //return text... if it has more than maxChars
  if (text.length > maxChars) {
    return `${text.substring(0, maxChars)}...`;
  }

  //return text if it has less than maxChars
  return text;
};
