import * as _ from './index';
import * as lo from 'lodash';

const a = _.curry(
  (a: string, b: string, c: string, d: string) => a+b+c+d
)

const b = _.curryRight(
  (a: string, b: string, c: string, d: string) => a+b+c+d
)

console.log(a('a', 'b', 'c', 'd'));
console.log(b('a', 'b', 'c', 'd'));

