async function MergeSort(array, updateArray, updateAlgoName) {
  updateAlgoName("- Merge Sort");
  var fakeArray = [...array];
  // divideArrayRecursive(fakeArray, 0, Math.floor(array.length/2) - 1, array.length - 1, updateArray)
}

async function divideArrayRecursive(
  farray,
  startidx,
  middleidx,
  endidx,
  updateArray
) {
  if (startidx < endidx) {
    divideArrayRecursive(
      farray,
      startidx,
      Math.floor((startidx + middleidx) / 2),
      middleidx,
      updateArray
    );
    divideArrayRecursive(
      farray,
      middleidx + 1,
      Math.floor((endidx + middleidx + 1) / 2),
      endidx,
      updateArray
    );
    mergeArray(farray, startidx, middleidx, endidx, updateArray);
  }
}
async function mergeArray(farray, startidx, middleidx, endidx, updateArray) {
  const new_array = [];
  let i = startidx;
  let j = middleidx + 1;

  while (i <= middleidx || j <= endidx) {
    if (i > middleidx) {
      new_array.push(farray[j]);
      j++;
    } else if (j > endidx) {
      new_array.push(farray[i]);
      i++;
    } else if (farray[i] <= farray[j]) {
      new_array.push(farray[i]);
      i++;
    } else {
      new_array.push(farray[j]);
      j++;
    }
  }

  combineComponent(farray, new_array, startidx, endidx, updateArray);
}

async function combineComponent(
  farray,
  new_array,
  startidx,
  endidx,
  updateArray
) {
  let newArrIdx = 0;

  for (let i = startidx; i < endidx + 1; i++) {
    farray[i] = new_array[newArrIdx];
    updateArray(farray);
    await sleep(10);
    newArrIdx++;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default MergeSort;
