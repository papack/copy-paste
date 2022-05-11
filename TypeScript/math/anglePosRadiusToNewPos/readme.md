# anglePosLengthToNewPos

give the angle and the length of the line and the new position of the point
this is useful for eg. 2D svg calculations

the angle is in grad and clockwise. 12 oclock is 0 grad, 3 oclock is 90 grad, 6 oclock is 180 grad, 9 oclock is 270 grad

## Usage

```typescript
import { anglePosLengthToNewPos } from "./anglePosRadiusToNewPos";

console.log(anglePosLengthToNewPos({ length: 10, angle: 90 })); // {x: 10, y: 0}
console.log(anglePosLengthToNewPos({ length: 10, angle: 90, fromX: 10 })); // {x: 20, y: 0}
```
