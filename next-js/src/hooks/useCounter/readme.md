# useCounter

    useCounter is a custom hook that can be used to increment and decrement a counter.

## useage

```tsx
import React from "react";

import { useCounter } from "./useCounter";

export default function Component() {
  const { count, setCount, increment, decrement, reset } = useCounter(0);

  const multiplyBy2 = () => setCount((x) => x * 2);

  return (
    <>
      <p>Count is {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={multiplyBy2}>Multiply by 2</button>
    </>
  );
}
```