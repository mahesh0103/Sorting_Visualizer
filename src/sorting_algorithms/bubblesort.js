const bubbleSort = async (array,x,y,setArray,setx,sety) => {
    let arr = [...array];
    let delay=500;
    const swap = (idx1, idx2, arr) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
            resolve();
          }, delay); // Adjust the delay to control animation speed
        });
      };
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          await swap(j, j + 1, arr);
          setArray([...arr]);
          setx(j);
          sety(j+1);
        }
      }
    }
    setx(-2);
    sety(-2);
  };

  export default bubbleSort;