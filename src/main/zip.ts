import { unzip } from '../index';

const zip = unzip as <T extends unknown[]>(arr: T[]) => T[]

export default zip;