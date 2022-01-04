const unzipWith = <Zipped extends unknown[], R>(arr: Zipped[], callback: (...vals: Zipped[]) => R) => {
  const un: any[] = [];
  arr.forEach(el => {
    el.forEach((e, i) => {
      if (!un[i]) un[i] = [];
      un[i].push(e)
    })
  })

  return un.map(el => callback(...el)) as R[];
}

export default unzipWith;