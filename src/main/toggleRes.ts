/**
 * Toggle return value
 */
const toggleRes = <T extends (...args: any) => boolean>(fn: T) => (
  (...args: any) => !fn(...args)
) as any as T

export default toggleRes;