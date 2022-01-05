const pickBy = <T, R = Partial<T>>(obj: T, by: (val: T[keyof T], i: keyof T) => boolean) => Object.fromEntries(
  Object.entries(obj).filter(([key, val]) => (by as any)(val, key))
) as R

export default pickBy;