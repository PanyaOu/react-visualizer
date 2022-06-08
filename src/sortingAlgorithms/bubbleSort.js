//TO DO: implement and pause and continue button for this

async function BubbleSort(array, updateArray, updateAlgoName) {
  var count = 0;
  updateAlgoName("- Bubble Sort");

  for (;;) {
    let i = 0;
    let j = 1;

    for (j = 1; j < array.length; j++) {
      if (array[j] <= array[i]) {
        swap(array, i, j);
        updateArray(array);
        await sleep(1);
      }
      i = i + 1;
    }
    count = count + 1;
    if (count > array.length - 1) {
      break;
    }
  }
  return array;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function swap(array, i, j) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}

export default BubbleSort;
