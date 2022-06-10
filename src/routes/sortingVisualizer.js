import React, { useEffect, useCallback, useState } from "react";
import "../css/sorting.css";
import BubbleSort from "../sortingAlgorithms/bubbleSort";
import MergeSort from "../sortingAlgorithms/mergeSort";

const HEIGHT_MULTIPLIER = 3;

function SortingVisualizer() {
  useEffect(() => {
    updateDark();
  });

  const [dark, setDark] = useState(false);

  let [flag, setFlag] = useState(false);
  var [array, setArray] = useState([]);
  var [algoName, setAlgoName] = useState("");

  const body = document.body;
  const theme = localStorage.getItem("theme");
  const isSolar = localStorage.getItem("isSolar");

  if (theme) {
    body.classList.add(theme);
    isSolar && body.classList.add("solar");
  }

  function updateDark() {
    var lol = localStorage.getItem("theme");
    console.log(lol === "dark", "INSIDE");

    if (lol === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }
  console.log(dark);

  // localStorage.clear()

  // console.log(dark)
  // var lol = localStorage.getItem("theme")
  // console.log(lol === 'dark', "INSIDE")

  function updateArray(array) {
    setArray([...array]);
  }

  function updateAlgoName(algoName) {
    setAlgoName(algoName);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function createArray() {
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

  function mergeSort() {
    MergeSort(array, updateArray, updateAlgoName);
  }

  console.log(dark);

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
              color: dark ? "purple" : "red",
            }}
          >
            {val}
          </div>
        ))}
      </div>
      <div className="button-container">
        {/* <button onClick={updateDark}>haha</button> */}
        <button onClick={createArray}>Create Array</button>
        {/* <button>Selection Sort</button> */}
        <button onClick={bubbleSort}>Bubble Sort</button>
        <button onClick={mergeSort}>Merge Sort</button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
