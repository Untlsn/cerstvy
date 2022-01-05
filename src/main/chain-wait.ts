import chain, { Chain } from './chain';
import revFn from './revFn';
import __ from './__';

export class ChainWait<T = any, R = any> {
  constructor(private callbacks: [fn: Function, args: any][] = []) {}

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
  map<NewR, Args extends any[] = any[]>(callback: (...args: [T, ...Args]) => NewR, ...args: Args) {
    return new ChainWait<T, NewR>([...this.callbacks, [callback, args]])
  }

  /**
   * Work like map but put T ad end of args
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  mapRev<NewR, Args extends any[] = any[]>(callback: (...args: [...Args, T]) => NewR, ...args: Args) {
    return new ChainWait<T, NewR>([...this.callbacks, [revFn(callback), args]])
  }

  /**
   * Work like map but T will be put in on placeholder
   * @param callback function use to map value
   * @param args if the callback can have more than one argument, a res can be put here
   */
  mapClever<NewR>(callback: (...args: any[]) => NewR, ...args: any[]) {
    const nestCallback = (val: any) => callback(...args.map(v => v == __ ? val : v))
    return new ChainWait<T, NewR>([...this.callbacks, [nestCallback, []]])
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