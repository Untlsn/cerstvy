import { identify } from '../index';

const compact = <T>(arr: T[]) => arr.filter(identify);

export default compact;