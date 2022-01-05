/**
 * Create array with n length
 * @param n length of array
 * @param map convert numbers to value of array
 */
const times = <T>(n: number, map: (n: number) => T) => {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(map(i));
  }
  return res;
}

export default times;