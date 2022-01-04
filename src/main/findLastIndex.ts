const findLastIndex = <T>(arr: T[], callback: (value: T) => boolean) => [...arr].reverse().findIndex(callback);

export default findLastIndex;