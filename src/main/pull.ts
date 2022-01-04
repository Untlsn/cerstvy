import { pullAll } from '../index';

const pull = <T>(arr: T[], ...remove: T[]) => pullAll(arr, remove);

export default pull;