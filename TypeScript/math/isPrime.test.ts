import { isPrime } from "./isPrime";

describe("isPrime(n)", () => {
  test("negativ number should throw error", () => {
    expect(() => isPrime(0)).toThrowError("Number must be greater than 0");
    expect(() => isPrime(-1)).toThrowError("Number must be greater than 0");
    expect(() => isPrime(-1337)).toThrowError("Number must be greater than 0");
    expect(() => isPrime(-42)).toThrowError("Number must be greater than 0");
  });

  test("1 is not prime", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("2 is prime", () => {
    expect(isPrime(2)).toBe(true);
  });

  test("3 is prime", () => {
    expect(isPrime(3)).toBe(true);
  });

  test("4 is not prime", () => {
    expect(isPrime(4)).toBe(false);
  });

  test("18539 is prime", () => {
    expect(isPrime(18539)).toBe(true);
  });

  test("1337 is not prime", () => {
    expect(isPrime(1337)).toBe(false);
  });
});
