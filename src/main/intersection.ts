const intersection = <T>(arr: T[], omit: T[]) => arr.filter(el => omit.includes(el));

export default intersection;