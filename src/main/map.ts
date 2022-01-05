const map = <T, R>(arr: T[], callback: (val: T, i: number) => R) => arr.map(callback);

export default map;