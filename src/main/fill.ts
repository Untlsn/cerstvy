const fill = <T>(arr: any[], val: T): T[] => {
  for (let i = 0; i < arr.length; i++) arr[i] = val;
  return arr;
}

export default fill;