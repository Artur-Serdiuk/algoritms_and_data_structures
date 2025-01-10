function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const data = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const data2 = [2, 5, 6, 3, 1];

console.log(bubbleSort(data));
