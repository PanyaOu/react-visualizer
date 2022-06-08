import React, { useEffect, useCallback, useState } from 'react';
import '../css/sorting.css';
import BubbleSort from '../sortingAlgorithms/bubbleSort';
// import BubbleSortAnimations from '../sortingAlgorithms/bubbleSort';

const HEIGHT_MULTIPLIER = 3
// const ANIMATION_SPEED_MS = 1;
// const PRIMARY_COLOR = 'beige';
// const SECONDARY_COLOR = 'red';


function SortingVisualizer() {

var [array, setArray] = useState(array = [10,9,8,7,6,5,4,3,2,1]);

function handleChange(e){
    setArray(e.target.value)
}



// useEffect( () => {
//     setArray(array)
// },[setArray]);


// const handleChange = useCallback(
//     (event) => {
//       event.preventDefault();
//       setArray(array);
//     },
//     [array]
//   );

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function resetArray(){
    const new_array = [];
    for (let i = 0; i < 100; i++){
        new_array.push(getRandomInt(100))
    }
    setArray(new_array);
}

// let props = {
//     array: {array},
//     handleChange: {handleChange}
// }

function bubbleSort(){

    
    <BubbleSort array = {array} handleChange = {handleChange}/>
    console.log("RUNNING")
    BubbleSort(array)
    console.log("ENDING")

}

return(
    <div>
        <h1>Sorting Visualizer</h1>
        <div className='array-container'>
            {array.map((val, idx) => (
            <div className='array-bar'
                key = {idx} 
                style={{
                height: `${val*HEIGHT_MULTIPLIER}px`}}>
                    {val}
                    </div>))}
        </div>
        <div className='button-container'>
            <button onClick={resetArray}>Reset Array</button>
            <button>Selection Sort</button>
            <button onClick={bubbleSort}>Bubble Sort</button>

        </div>
    </div>
    );
}

export default SortingVisualizer;