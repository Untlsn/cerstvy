import * as Y from '../src';

describe('chunk', () => {
  it('should return one chunk if size is bigger then arr length', () => {
    const arr = [1, 2, 3, 4];
    const size = 5;
    expect(Y.chunk(arr, size)).toEqual([arr]);
  });
  it('should return 3 chunks if size is 3 times smaller then arr length', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const size = 2;
    expect(Y.chunk(arr, size)).toEqual([[1, 2], [3, 4], [5, 6]]);
  });
  it('should return 2 full chunks and one remain if size is 2.5 times smaller then arr length', () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 2;
    expect(Y.chunk(arr, size)).toEqual([[1, 2], [3, 4], [5]]);
  });
});