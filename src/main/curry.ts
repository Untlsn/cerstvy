interface CurryFn {
  <R>(fn: () => R): () => typeof fn
  <T, R>(fn: (arg: T) => R): typeof fn
  <T1, T2, R>(fn: (...args: [T1, T2]) => R): Curry2<T1, T2, R>
  <T1, T2, T3, R>(fn: (...args: [T1, T2, T3]) => R): Curry3<T1, T2, T3, R>
  <T1, T2, T3, T4, R>(fn: (...args: [T1, T2, T3, T4]) => R): Curry4<T1, T2, T3, T4, R>
  <T1, T2, T3, T4, T5, R>(fn: (...args: [T1, T2, T3, T4, T5]) => R): Curry5<T1, T2, T3, T4, T5, R>
}

interface Curry2<T1, T2, R> {
  (arg1: T1, arg2: T2): R
  (arg1: T1): (arg2: T2) => R
}

interface Curry3<T1, T2, T3, R> {
  (arg1: T1, arg2: T2, arg3: T3): R
  (arg1: T1, arg2: T2): (arg3: T3) => R
  (arg1: T1): Curry2<T2, T3, R>
}

interface Curry4<T1, T2, T3, T4, R> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4): R
  (arg1: T1, arg2: T2, arg3: T3): (arg4: T4) => R
  (arg1: T1, arg2: T2): Curry2<T3, T4, R>
  (arg1: T1): Curry3<T2, T3, T4, R>
}

interface Curry5<T1, T2, T3, T4, T5, R> {
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): R
  (arg1: T1, arg2: T2, arg3: T3, arg4: T4): (arg5: T5) => R
  (arg1: T1, arg2: T2, arg3: T3): Curry2<T4, T5, R>
  (arg1: T1, arg2: T2): Curry3<T3, T4, T5, R>
  (arg1: T1): Curry4<T2, T3, T4, T5, R>
}

const curry = (fn: Function, ...args: any[]) => {
  if (fn.length < 1) return fn;

  return fn.length > args.length
    ? (...newArgs: any[]) => curry(fn, ...[...args, ...newArgs])
    : fn(...args)
}

export default curry as any as CurryFn;