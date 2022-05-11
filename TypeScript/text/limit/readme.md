# Limit

this function is used to limit characters in a string. if the string is longer than the limit, it will be cut off and appended with the `...` string.

## Usage

```typescript
import { limit } from "./limit";

limit("Hello World", { maxChars: 5 }); // "Hello..."
```
