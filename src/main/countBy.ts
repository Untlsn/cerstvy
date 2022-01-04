const countBy = <T, R extends string|number>(arr: T[], by: (val: T) => R) => {
  const res: Record<any, number> = {};

  arr.forEach(el => {
    if (!res[by(el)]) {
      res[by(el)] = 1;
    } else {
      res[by(el)]++
    }
  })

  return res as Record<`${R}`, number>;
}

export default countBy;