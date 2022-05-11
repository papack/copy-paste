import { anglePosLengthToNewPos } from "./anglePosLengthToNewPos";

describe("anglePosLengthToNewPos()", () => {
  it("({ angle: 0, length: 0, xFrom: 0, yFrom: 0 }) should be { x: 0, y: 0 }", () => {
    expect(
      anglePosLengthToNewPos({ angle: 0, length: 0, xFrom: 0, yFrom: 0 })
    ).toEqual({ x: 0, y: 0 });
  });

  it("({ angle: 0, length: 10, xFrom: 0, yFrom: 0 }) should be { x: 0, y: 10 }", () => {
    expect(
      anglePosLengthToNewPos({ angle: 0, length: 10, xFrom: 0, yFrom: 0 })
    ).toEqual({ x: 0, y: 10 });
  });

  it("({ angle: 90, length: 17 }) should be { x: 17, y: 0 }", () => {
    expect(anglePosLengthToNewPos({ angle: 90, length: 17 })).toEqual({
      x: 17,
      y: 0,
    });
  });

  it("({ angle: -90, length: 17 }) should be { x: -17, y: 0 }", () => {
    expect(anglePosLengthToNewPos({ angle: -90, length: 17 })).toEqual({
      x: -17,
      y: 0,
    });
  });

  it("({ angle: 180, length: 42 }) should be { x: 0, y: -42 }", () => {
    expect(anglePosLengthToNewPos({ angle: 180, length: 42 })).toEqual({
      x: 0,
      y: -42,
    });
  });

  it("({ angle: -180, length: 42 }) should be { x: 0, y: -42 }", () => {
    expect(anglePosLengthToNewPos({ angle: -180, length: 42 })).toEqual({
      x: 0,
      y: -42,
    });
  });

  it("({ angle: 270, length: 1337 }) should be { x: -1337, y: 0 }", () => {
    expect(anglePosLengthToNewPos({ angle: 270, length: 1337 })).toEqual({
      x: -1337,
      y: 0,
    });
  });
});
