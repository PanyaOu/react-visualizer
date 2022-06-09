async function MergeSort(array, updateArray, updateAlgoName) {
  updateAlgoName("- Merge Sort");
  //divideArrayRecursive(array, 0, array.length - 1)
  divideArrayIterative(array, 0, array.length - 1, updateArray);
}

async function divideArrayIterative(array, startidx, endidx, updateArray) {
  for (
    var arraySubset = 1;
    arraySubset <= endidx;
    arraySubset = arraySubset * 2
  )
    for (let j = startidx; j <= endidx; j += arraySubset * 2) {
      var start = j;
      // var end = Math.min(start + arraySubset*2 - 1, endidx)
      var end = Math.min(j + 2 * arraySubset - 1, endidx);
      // var middle = Math.min(Math.floor((start + end)/2), endidx)
      var middle = Math.min(j + arraySubset - 1, endidx);

      console.log(start, middle, end);
      mergeArray(array, start, middle, end);
      updateArray(array);
      await sleep(100);
    }
}

async function divideArrayRecursive(array, startidx, endidx, updateArray) {
  let middleidx = Math.floor(array.length / 2) - 1;
  if (startidx < endidx) {
    divideArrayRecursive(
      array,
      startidx,
      Math.floor((startidx + middleidx) / 2),
      middleidx,
      updateArray
    );
    divideArrayRecursive(
      array,
      middleidx + 1,
      Math.floor((endidx + middleidx + 1) / 2),
      endidx,
      updateArray
    );
    mergeArray(array, startidx, middleidx, endidx, updateArray);
  }
}
function mergeArray(array, startidx, middleidx, endidx) {
  const new_array = [];
  let i = startidx;
  let j = middleidx + 1;

  while (i <= middleidx || j <= endidx) {
    if (i > middleidx) {
      new_array.push(array[j]);
      j++;
    } else if (j > endidx) {
      new_array.push(array[i]);
      i++;
    } else if (array[i] <= array[j]) {
      new_array.push(array[i]);
      i++;
    } else {
      new_array.push(array[j]);
      j++;
    }
  }


  combineComponent(array, new_array, startidx, endidx);

}

function combineComponent(
  array,
  new_array,
  startidx,
  endidx
  ) {
  let newArrIdx = 0;
  for (let i = startidx; i < endidx + 1; i++) {
    array[i] = new_array[newArrIdx];
    newArrIdx++;
  }

  
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default MergeSort;
