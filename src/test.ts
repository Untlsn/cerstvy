import * as Y from './index'

const join3 = (a: string, b: string, c: string) => `${a} ${b} ${c}`;

Y.chain('kota')
  .mapClever(join3, Y.__, Y.__, Y.__)
  .map(console.log)