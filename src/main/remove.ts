const remove = <T>(arr: T[], callback: (val: T) => boolean): T[] => {
  const removed = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      removed.push(...arr.splice(i, 1))
      i--;
    }
  }
  return removed;
}

export default remove;