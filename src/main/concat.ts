const concat = <T>(...args: any[]) => {
  const res: any[] = [];

  args.forEach((el: any) => {
    if (el instanceof Array) {
      res.push(...el)
    } else {
      res.push(el)
    }
  })

  return res;
}

export default concat;