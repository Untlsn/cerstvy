import ArrayCallback from '../types/ArrayCallback';

const findLast = <T>(arr: T[], callback: ArrayCallback<T, boolean>) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (callback(arr[i], i, arr)) return arr[i];
  }
}

export default findLast;