import { scale } from "./scale";

describe("scale(value, fromMin, fromMax, toMin, toMax)", () => {
  it("scale(0, 0, 10, 0, 100) should be 0", () => {
    expect(scale(0, 0, 10, 0, 100)).toBe(0);
  });

  it("scale(5, 0, 10, 0, 100) should be 50", () => {
    expect(scale(5, 0, 10, 0, 100)).toBe(50);
  });

  it("scale(10, 0, 10, 0, 100) should be 100", () => {
    expect(scale(10, 0, 10, 0, 100)).toBe(100);
  });

  it("scale(-50, -100, 0, 0, 100) should be 50", () => {
    expect(scale(-50, -100, 0, 0, 100)).toBe(50);
  });

  it("scale(-5, 0, 10, 0, 100) should throw error", () => {
    expect(() => scale(-5, 0, 10, 0, 100)).toThrowError(
      "value must be between 0 and 10"
    );
  });

  it("scale(15, 0, 10, 0, 100) should throw error", () => {
    expect(() => scale(15, 0, 10, 0, 100)).toThrowError(
      "value must be between 0 and 10"
    );
  });
});
