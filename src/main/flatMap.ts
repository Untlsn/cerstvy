import ArrayCallback from '../types/ArrayCallback';

const flatMap = <T, R>(arr: T[], callback: ArrayCallback<T, R>) => arr.flatMap(callback);

export default flatMap;