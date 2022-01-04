const dropRightWhile = <T>(arr: T[], on: (val: T) => boolean) => {
  const res = [...arr];
  while (on(res[res.length - 1])) {
    res.pop();
  }
  return res;
}

export default dropRightWhile;