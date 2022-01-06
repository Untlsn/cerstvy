const reduce = <T>(arr: T[], callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T) => arr.reduce(callback);

export default reduce;