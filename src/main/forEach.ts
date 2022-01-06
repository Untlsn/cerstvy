import ArrayCallback from '../types/ArrayCallback';

const forEach = <T>(arr: T[], callback: ArrayCallback<T>) => arr.forEach(callback);

export default forEach;