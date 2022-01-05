import chain, { Chain } from './chain';

export class ChainWait<T = any, R = any> {
  private callbacks: [fn: Function, args: any][] = []

  /**
   * return standalone map function of ChainWait
   */
  get mapSelf() {
    return this.map.bind(this)
  }

  /**
   * Store callback to map value at end
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  map<NewR, Args extends any[] = any[]>(callback: (val: T, ...restArgs: Args) => NewR, ...args: Args) {
    this.callbacks.push([callback, args]);
    return this as any as ChainWait<T, NewR>
  }

  /**
   * Return blinded functions into one
   */
  get valueOf() {
    return (val: T) => this.callbacks.reduce((acc, [fn, args]) => {
      return fn(acc, ...args)
    }, val) as any as R
  }

  toChain(val: T): Chain<R> {
    return chain(this.valueOf(val))
  }
}

/**
 * Similar to chain but wait for value
 */
const chainWait = <T = any, R = any>() => new ChainWait<T, R>()

export default chainWait;