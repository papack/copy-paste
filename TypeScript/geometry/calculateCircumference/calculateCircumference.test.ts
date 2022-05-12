import { calculateCircumference } from "./calculateCircumference";

describe("calculateCircumference", () => {
  it("radius should not be negativ", () => {
    expect(() => {
      calculateCircumference(-1);
    }).toThrowError("radius must be greater than 0");
  });
  it("50 should be 314,159...", () => {
    expect(calculateCircumference(50)).toBe(314.1592653589793);
  });
});
