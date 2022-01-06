import ArrayCallback from '../types/ArrayCallback';

const countBy = <T, R extends string|number>(arr: T[], by: ArrayCallback<T, R>) => {
  const res: Record<any, number> = {};

  arr.forEach((el, i) => {
    const byRes = by(el, i, arr)

    if (!res[byRes]) {
      res[byRes] = 1;
    } else {
      res[byRes]++
    }
  })

  return res as Record<`${R}`, number>;
}

export default countBy;