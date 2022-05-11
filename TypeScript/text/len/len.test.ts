import { len } from "./len";

describe("len(str)", () => {
  it("hello legth of 5", () => {
    expect(len("hello")).toBe(5);
  });

  it("'Hello, this is test' has a length of 19", () => {
    expect(len("Hello, this is test")).toBe(19);
  });

  it("'' has a leght of 0", () => {
    expect(len("")).toBe(0);
  });
});
