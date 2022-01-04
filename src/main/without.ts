const without = <T>(arr: T[], ...els: T[]) => arr.filter(el => !els.includes(el))

export default without;