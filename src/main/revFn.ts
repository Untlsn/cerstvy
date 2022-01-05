import type Reverse from '../types/reverse';

/**
 * Reverse arguments in function
 */
const revFn = <T extends any[], R>(fn: (...args: T) => R) => {
  // @ts-ignore
  return (...args: Reverse<T>) => fn(...args.reverse())
}

export default revFn;