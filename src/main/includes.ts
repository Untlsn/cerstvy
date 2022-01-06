const includes = <T>(arr: T[], searchElement: T) => arr.includes(searchElement);

export const fromIndex = <T>(arr: T[], searchElement: T, fromIndex: number) => arr.includes(searchElement, fromIndex);

export default includes;