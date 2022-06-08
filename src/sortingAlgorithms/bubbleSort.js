function BubbleSort({props}) {
    console.log(props.array, "hello")
    // let array = props
    let array = props.array
    
    var count = 0

    for (;;){
      let i = 0
      let j = 1

      for (j = 1 ; j < array.length; j++){
          if (array[j] <= array[i]){
            swap(array, i, j);
            props.handleChange([...array])

          }
          i = i + 1
  
        }
        count = count + 1
        if (count > array.length - 1){
          break;
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function swap(array, i, j) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

export default BubbleSort;