import __ from './__';

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
  map<R, Args extends any[] = any[]>(callback: (...args: [T, ...Args]) => R, ...args: Args) {
    return new Chain(callback(this.val, ...args))
  }

  /**
   * Work like map but put T ad end of args
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  mapRev<R, Args extends any[] = any[]>(callback: (...args: [...Args, T]) => R, ...args: Args) {
    return new Chain(callback(...args, this.val))
  }

  /**
   * Work like map but T will be put in on placeholder
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  mapClever<R>(callback: (...args: any[]) => R, ...args: any[]) {
    return new Chain(callback(...args.map(v => v == __ ? this.val : v)))
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