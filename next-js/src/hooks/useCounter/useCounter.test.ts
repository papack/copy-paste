import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should 0 after init", () => {
    //renderhook
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("should 5 when init with 5", () => {
    //renderhook
    const { result } = renderHook(() => useCounter(5));

    expect(result.current.count).toBe(5);
  });

  test("should 5 after increment 5 times", () => {
    //renderhook
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });

    expect(result.current.count).toBe(5);
  });

  test("should -5 after decrement 5 times", () => {
    //renderhook
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.decrement();
      result.current.decrement();
      result.current.decrement();
      result.current.decrement();
      result.current.decrement();
    });

    expect(result.current.count).toBe(-5);
  });

  test("should reset ", () => {
    //renderhook
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.decrement();
      result.current.decrement();
      result.current.decrement();
      result.current.setCount(10);
      result.current.decrement();
      result.current.decrement();
      result.current.reset();
    });

    expect(result.current.count).toBe(5);
  });

  test("set manual", () => {
    //renderhook
    const { result } = renderHook(() => useCounter(-5));

    act(() => {
      result.current.setCount(42);
    });

    expect(result.current.count).toBe(42);
  });
});
