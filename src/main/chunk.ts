const chunk = <T>(arr: T[], size: number) => {
  let last = 0;
  const res = [];
  for (let i = size; i < arr.length; i += size) {
    res.push(arr.slice(last, i))
    last = i;
  }
  res.push(arr.slice(last))
  return res;
}

export default chunk;