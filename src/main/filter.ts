import ArrayCallback from '../types/ArrayCallback';
import toggleRes from './toggleRes';

const filter = <T>(arr: T[], callback: ArrayCallback<T, boolean>) => arr.filter(toggleRes(callback));

export default filter;