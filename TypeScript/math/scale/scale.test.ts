import { scale } from "./scale";

describe("scale()", () => {
  it("{ value: 0, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 }) should be 0", () => {
    expect(
      scale({ value: 0, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toBe(0);
  });

  it("scale(5, 0, 10, 0, 100) should be 50", () => {
    expect(
      scale({ value: 5, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toBe(50);
  });

  it("scale(10, 0, 10, 0, 100) should be 100", () => {
    expect(
      scale({ value: 10, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toBe(100);
  });

  it("scale(-50, -100, 0, 0, 100) should be 50", () => {
    expect(
      scale({ value: -50, fromMin: -100, fromMax: 0, toMin: 0, toMax: 100 })
    ).toBe(50);
  });

  it("scale(-5, 0, 10, 0, 100) should throw error", () => {
    expect(() =>
      scale({ value: -5, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toThrowError("value must be between 0 and 10");
  });

  it("scale(15, 0, 10, 0, 100) should throw error", () => {
    expect(() =>
      scale({ value: 15, fromMin: 0, fromMax: 10, toMin: 0, toMax: 100 })
    ).toThrowError("value must be between 0 and 10");
  });
});
