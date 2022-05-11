import { limit } from "./limit";

describe("limit()", () => {
  it("'hello world' should be 'hello world'", () => {
    expect(limit("hello world")).toBe("hello world");
  });

  it("'hello world' should be 'hel... with maxChars=3'", () => {
    expect(limit("hello world", { maxChars: 3 })).toBe("hel...");
  });

  it("should throw error, if maxChar is negativ", () => {
    expect(() => limit("hello world", { maxChars: -42 })).toThrowError(
      "maxChars must be greater than 0"
    );
  });

  it("should throw error, if maxChar is 0", () => {
    expect(() => limit("hello world", { maxChars: 0 })).toThrowError(
      "maxChars must be greater than 0"
    );
  });
});
