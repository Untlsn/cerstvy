import { Primitive } from './Primitive';

declare type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;
declare type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

declare type PathImpl<K extends string | number, V> = V extends Primitive
  ? `${K}`
  : V extends any[]
    ? `${K}` | `${K}.${Path<V>}` | `${K}.length`
    : `${K}` | `${K}.${Path<V>}`;


export declare type Path<T> = T extends ReadonlyArray<infer V> ? IsTuple<T> extends true ? {
  [K in TupleKey<T>]-?: PathImpl<K & string, T[K]>;
}[TupleKey<T>] : PathImpl<number, V> : {
  [K in keyof T]-?: PathImpl<K & string, T[K]>;
}[keyof T];