import { Path } from '../types/Path';

const deepProperty = <T, R>(obj: T, prop: Path<T>) => eval(`obj?.['${
  prop.replaceAll('.', "']?.['")
}']`)

export default deepProperty;