const { partition, swap, quickSort } = require('./quickSort');

describe('Quick sort testing', () => {

  it('can successfully do a quick sort on an odd number array', () => {
    const arr = [1, 55, 22, 105, 133, 2005, 33];
    const left = 0;
    const right = arr.length - 1;
    quickSort(arr, left, right);
    expect(arr).toEqual([1, 22, 33, 55, 105, 133, 2005]);
  });

  it('can successfully do a quick sort on an even number array', () => {
    const arr = [1, 55, 22, 105, 133, 33];
    const left = 0;
    const right = arr.length - 1;
    quickSort(arr, left, right);
    expect(arr).toEqual([1, 22, 33, 55, 105, 133]);
  });

  it('testing partition', () => {
    const arr = [6, 3, 4, 1, 2];
    const left = 0;
    const right = arr.length - 1;
    partition(arr, left, right);
    expect(arr).toEqual([1, 2, 4, 6, 3]);
  });

  it('testing swap', () => {
    const arr = [6, 3, 4, 1, 2];
    const i = 0;
    const low = 0;
    swap(arr, i, low);
    expect(arr).toEqual([6, 3, 4, 1, 2]);
  });

});