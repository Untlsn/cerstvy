import * as _ from './index';

const a = _.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
const b = _.countBy(['one', 'two', 'three'], (e) => _.property(e, 'length'));
// => { '3': 2, '5': 1 }


console.log(a, b);