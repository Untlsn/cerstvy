const uniqBy = <T, R>(arr: T[], by: (val: T) => R) => {
  const res: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (res.every(r => by(r) != by(arr[i]))) {
      res.push(arr[i])
    }
  }

  return res;
}

export default uniqBy;