export class Chain<T> {
  constructor(private val: T) {}

  /**
   * return standalone map function of Chain
   */
  get mapSelf() {
    return this.map.bind(this)
  }

  /**
   * Map value of chain from T to R using callback
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  map<R, Args extends any[] = any[]>(callback: (val: T, ...restArgs: Args) => R, ...args: Args) {
    return new Chain(callback(this.val, ...args))
  }

  /**
   * Unwrap value from modal
   */
  valueOf() {
    return this.val;
  }
}

/**
 * Creates a functor with advanced mapping
 */
const chain = <T>(val: T) => new Chain(val)

export default chain;