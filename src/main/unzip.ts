const unzip = <T extends unknown[]>(arr: T[]) => {
  const un: any[] = [];
  arr.forEach(el => {
    el.forEach((e, i) => {
      if (!un[i]) un[i] = [];
      un[i].push(e)
    })
  })

  return un as T[];
}

export default unzip;