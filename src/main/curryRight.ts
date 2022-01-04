interface CurryRFn {
  <R>(fn: () => R): () => typeof fn
  <T, R>(fn: (arg: T) => R): typeof fn
  <T1, T2, R>(fn: (...args: [T1, T2]) => R): CurryR2<T1, T2, R>
  <T1, T2, T3, R>(fn: (...args: [T1, T2, T3]) => R): CurryR3<T1, T2, T3, R>
  <T1, T2, T3, T4, R>(fn: (...args: [T1, T2, T3, T4]) => R): CurryR4<T1, T2, T3, T4, R>
  <T1, T2, T3, T4, T5, R>(fn: (...args: [T1, T2, T3, T4, T5]) => R): CurryR5<T1, T2, T3, T4, T5, R>
}

interface CurryR2<T1, T2, R> {
  (arg2: T2, arg1: T1): R
  (arg2: T2): (arg1: T1) => R
}

interface CurryR3<T1, T2, T3, R> {
  (arg3: T3, arg2: T2, arg1: T1): R
  (arg3: T3, arg2: T2): (arg1: T1) => R
  (arg3: T3): CurryR2<T1, T2, R>
}

interface CurryR4<T1, T2, T3, T4, R> {
  (arg4: T4, arg3: T3, arg2: T2, arg1: T1): R
  (arg4: T4, arg3: T3, arg2: T2): (arg1: T1) => R
  (arg4: T4, arg3: T3): CurryR2<T1, T2, R>
  (arg4: T4): CurryR3<T1, T2, T3, R>
}

interface CurryR5<T1, T2, T3, T4, T5, R> {
  (arg5: T5, arg4: T4, arg3: T3, arg2: T2, arg1: T1): R
  (arg5: T5, arg4: T4, arg3: T3, arg2: T2): (arg1: T1) => R
  (arg5: T5, arg4: T4, arg3: T3): CurryR2<T1, T2, R>
  (arg5: T5, arg4: T4): CurryR3<T1, T2, T3, R>
  (arg5: T5): CurryR4<T1, T2, T3, T4, R>
}

const curry = (fn: Function, ...args: any[]) => {
  if (fn.length < 1) return fn;

  return fn.length > args.length
    ? (...newArgs: any[]) => curry(fn, ...[...args, ...newArgs].reverse())
    : fn(...args)
}

export default curry as any as CurryRFn;