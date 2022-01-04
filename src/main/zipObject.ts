import unzip from './unzip';

const zipObject = <T extends string | number, R>(keys: T[], vals: R[]): Record<T, R> => {
  return Object.fromEntries(unzip([keys, vals]));
}

export default zipObject;