const sampleSize = <T>(arr: T[], count: number) => {
  const copyArr = [...arr];
  const res = [];

  for (let i = 0; i < count; i++) {
    res.push(copyArr.splice(Math.floor(Math.random() * copyArr.length), i));
    if (!copyArr.length) return res;
  }
  return res;
};

export default sampleSize;