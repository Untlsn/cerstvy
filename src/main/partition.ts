import ArrayCallback from '../types/ArrayCallback';

const keyBy = <T, R extends number|string>(arr: T[], callback: ArrayCallback<T, boolean>) => {
  const check: T[] = [];
  const nonCheck: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    (callback(arr[i], i, arr) ? check : nonCheck).push(arr[i]);
  }

  return [check, nonCheck]
}

export default keyBy;