import ArrayCallback from '../types/ArrayCallback';

const some = <T>(arr: T[], callback: ArrayCallback<T, boolean>) => arr.some(callback);

export default some;