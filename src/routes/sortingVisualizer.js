import React, { useEffect, useCallback, useState } from "react";
import "../css/sorting.css";
import BubbleSort from "../sortingAlgorithms/bubbleSort";

const HEIGHT_MULTIPLIER = 3;

function SortingVisualizer() {
  let [flag, setFlag] = useState(false);
  var [array, setArray] = useState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  var [algoName, setAlgoName] = useState("");

  function updateArray(array) {
    setArray([...array]);
  }

  function updateAlgoName(algoName) {
    setAlgoName(algoName);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function resetArray() {
    setFlag(true);
    const new_array = [];
    for (let i = 0; i < 100; i++) {
      new_array.push(getRandomInt(100));
    }
    setArray([...new_array]);
    setAlgoName("");
  }

  function bubbleSort() {
    BubbleSort(array, updateArray, updateAlgoName);
  }

  return (
    <div>
      <h1>Sorting Visualizer {algoName}</h1>
      <div className="array-container">
        {array.map((val, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${val * HEIGHT_MULTIPLIER}px`,
            }}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={resetArray}>Reset Array</button>
        {/* <button>Selection Sort</button> */}
        <button onClick={bubbleSort}>Bubble Sort</button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
