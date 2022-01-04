const dropWhile = <T>(arr: T[], on: (val: T) => boolean) => {
  const res = [...arr];
  while (on(res[0])) {
    res.shift();
  }
  return res;
}

export default dropWhile;