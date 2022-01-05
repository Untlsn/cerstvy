import * as Y from './index'

const chain7 = Y.chainWait<number>()
  .map((v) => v + 2)
  .toChain(5)

chain7.map(console.log)