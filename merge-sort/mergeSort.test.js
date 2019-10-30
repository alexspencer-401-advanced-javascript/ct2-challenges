const { mergeSort } = require('./mergeSort');

describe('Merge sort testing', () => {

  it('can successfully do a merge sort on an odd number array', () => {
    const arr = [1, 55, 22, 105, 133, 2005, 33];
    mergeSort(arr);
    expect(arr).toEqual([1, 22, 33, 55, 105, 133, 2005]);
  });

  it('can successfully do a merge sort on an even number array', () => {
    const arr = [1, 55, 22, 105, 133, 33];
    mergeSort(arr);
    expect(arr).toEqual([1, 22, 33, 55, 105, 133]);
  });

});