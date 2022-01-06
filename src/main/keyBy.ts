import ArrayCallback from '../types/ArrayCallback';

const keyBy = <T, R extends number|string>(arr: T[], callback: ArrayCallback<T, R>) => Object.fromEntries(
  arr.map((el, i) => [callback(el, i, arr), el])
) as Record<`${R}`, T>;

export default keyBy;