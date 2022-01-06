import ArrayCallback from '../types/ArrayCallback';

const groupBy = <T, R extends string|number>(arr: T[], by: ArrayCallback<T, R>) => {
  const res: Record<any, any[]> = {};

  arr.forEach((el, i) => {
    const byRes = by(el, i, arr)

    if (!res[byRes]) {
      res[byRes] = [el];
    } else {
      res[byRes].push(el);
    }
  })

  return res as Record<`${R}`, T[]>;
}

export default groupBy;