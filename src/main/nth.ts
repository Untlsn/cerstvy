const nth = <T>(arr: T[], index: number) => index >= 0 ? arr[index] : arr[arr.length + index];

export default nth;