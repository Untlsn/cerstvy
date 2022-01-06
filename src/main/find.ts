import ArrayCallback from '../types/ArrayCallback';

const find = <T>(arr: T[], callback: ArrayCallback<T, boolean>) => arr.find(callback);

export default find;