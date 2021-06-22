'use strict';

module.exports = function quickSort(array, left, right) {

  if (left >= right) {
    return;
  }

  let position = partition(array, left, right);

  quickSort(array, left, position-1);

  quickSort(array, position + 1, right);

  return array;
};

function swap(array, i, low) {
  let temp;
  temp = array[i];
  array[i] = array[low];
  array[low] = temp;
}


function partition(array, start, end) {
  let pivot = array[end];

  let result = start - 1;
  for (let i = start; i <= end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, ++result);
    }
  }
  return result;
}
