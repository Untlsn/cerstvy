const reduce = <T, R>(arr: T[], callback: (previousValue: R, currentValue: T, currentIndex: number, array: T[]) => R, initialValue: R) => {
  return arr.reduce(callback, initialValue);
};

export default reduce;