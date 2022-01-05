type Reverse<T extends any[]> = T extends [any, any, any, any, any]
  ? [T[4], T[3], T[2], T[1], T[0]]
  : T extends [any, any, any, any]
    ? [T[3], T[2], T[1], T[0]]
    : T extends [any, any, any]
      ? [T[2], T[1], T[0]]
      : T extends [any, any]
        ? [T[1], T[0]]
        : T

export default Reverse;