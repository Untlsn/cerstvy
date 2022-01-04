const times = <T>(n: number, callback: (n: number) => T) => {
  let arr = [];
  for (let i = 0; i < n; i++) arr.push(callback(i));
  return arr;
}

export default times;