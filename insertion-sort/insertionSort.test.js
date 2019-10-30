const insertionSort = require('./insertionSort');

describe('Insertion sort testing', () => {

  it('can successfully do an insertion sort', () => {
    const arr = [1, 5, 2, 100, 6, 90];
    const result = insertionSort(arr);
    expect(result).toEqual([1, 2, 5, 6, 90, 100]);
  });

});