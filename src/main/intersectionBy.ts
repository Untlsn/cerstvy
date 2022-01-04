const intersectionBy = <T, R>(array: T[], values: any[], by: (val: T) => R) => {
  return array.filter(el => {
    return values.some(val => by(val) == by(el))
  })
};

export default intersectionBy;