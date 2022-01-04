const differenceBy = <T, R>(array: T[], values: any[], by: (val: T) => R) => {
  return array.filter(el => {
    return values.every(val => by(val) != by(el))
  })
};

export default differenceBy;