const pullAll = <T>(arr: T[], remove: T[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (remove.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

export default pullAll;