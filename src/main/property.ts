const property = <T, R extends keyof T = keyof T>(obj: T, prop: R): T[R] => obj[prop]

export default property;