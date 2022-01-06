import ArrayCallback from '../types/ArrayCallback';

const every = <T>(arr: T[], callback: ArrayCallback<T, boolean>) => arr.every(callback);

export default every;