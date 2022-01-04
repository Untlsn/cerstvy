const union = <T>(arr1: T[], arr2: T[]) => {
  const res = [...arr1];

  arr2.forEach(el => {
    if (!res.includes(el)) {
      res.push(el);
    }
  })

  return res;
}

export default union;