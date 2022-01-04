const unionBy = <T, R>(arr1: T[], arr2: T[], by: (val: T) => R) => {
  const res = [...arr1];

  arr2.forEach(el => {
    if (res.every(r => by(r) != by(el))) {
      res.push(el);
    }
  })

  return res;
}

export default unionBy;