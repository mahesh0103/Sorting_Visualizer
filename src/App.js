import React, { useState, useEffect } from 'react';
import './App.css';
import bubbleSort from './sorting_algorithms/bubblesort'; // Import bubbleSort function
import quickSort from './sorting_algorithms/quicksort'; // Import bubbleSort function
import heapSort from './sorting_algorithms/heapsort'; // Import bubbleSort function
import mergeSort from './sorting_algorithms/mergesort'; // Import mergeSort function
function App() {
  const [arraySize, setArraySize] = useState(10);
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [x,setx] = useState(-1);
  const [y,sety] = useState(-1);
  const [p,setp] = useState(-1);
  const [left,setleft] = useState([]);
  const [right,setright] = useState([]);
  const [tot,settot] = useState([]);
  const [srt, setsrt] = useState(0);
  const [par,setpar]=useState(-1);
  const [l,setl]=useState(-1);
  const [r,setr]=useState(-1);
  const generateRandomArray = (size) => {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
    }
    setArray(arr);
    setx(-1);
    sety(-1);
  };



  const handleSizeChange = (e) => {
    setArraySize(parseInt(e.target.value, 10));
  };

  const handleSort = () => {
    setsrt(0);
    bubbleSort(array,x,y,setArray,setx,sety);
  };
  const handleSort1 = () => {
    setsrt(1);
    quickSort(array,setArray,setx,sety,setp);
  };
  const handleSort2 = () => {
    setsrt(2);
    heapSort(array,setArray,setpar,setl,setr);
  };
  const handleSort3 = () => {
    setsrt(3);
    mergeSort(array,setArray,left,right,tot,setleft,setright,settot);
    let temp=[];
    setleft([...temp]);
    setright([...temp]);
    settot([...temp]);
  };
  useEffect(() => {
    generateRandomArray(arraySize);
  }, [arraySize]);

  function getBackgroundColor(index) {
    if(srt===0){
      if (index === x) {
        return '#A367B1'; 
      } 
      else if(index === y){
        return '#A367B1';
      }
      else if (x===-2) {
        return '#5D3587'; 
      } 
      return '#B2A59B';
    }
    if(srt===1){
      if (index === x) {
        return '#A367B1'; 
      } 
      else if(index === y){
        return '#A367B1';
      }
      else if(index===p){
        return '#597E52';
      }
      else if (x===-2) {
        return '#5D3587'; 
      } 
      return '#B2A59B';
    }
    if(srt===2){
      if(index===par){
        return '#597E52';
      }
      else if(index===l || index===r){
        return '#6DB9EF';
      }
      else if (x===-2) {
        return '#5D3587'; 
      } 
      return '#B2A59B';
    }
    if(srt===3){
      if(left.includes(index)){
        return '#B80000';
      }
      else if(right.includes(index)){
        return '#3559E0';
      }
      else if(tot.includes(index)){
        return '#FB8B24';
      }
      else{
        return '#B2A59B';
      }
    }
  }
  useEffect(() => {
    if (x === -2 || y === -2) {
      setArray([...array]); // Trigger array update to re-render colors
    }
  }, [x, y,array]);
  const max = Math.max(...array);
  return (
    <div className="app">
      <div className="sorting-visualizer">
        <h1>Sorting Visualizer</h1>
        <div className="controls">
          <label htmlFor="arraySize">Enter Array Size:</label>
          <input
            type="number"
            id="arraySize"
            value={arraySize}
            onChange={handleSizeChange}
          />
          <button onClick={handleSort} disabled={sorting}>
            Bubble Sort
          </button>
          <button onClick={handleSort1} disabled={sorting}>
            Quick Sort
          </button>
          <button onClick={handleSort2} disabled={sorting}>
            Heap Sort
          </button>
          <button onClick={handleSort3} disabled={sorting}>
            Merge Sort
          </button>
        </div>
        <div className="array-container">
          {array.map((value, index) => (
            <div
              key={index}
              className="array-bar"
              style={{
                height: `${30 + (value / max) * 100}px`, // Dynamically set height
                backgroundColor: getBackgroundColor(index), // Change background color conditionally
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
