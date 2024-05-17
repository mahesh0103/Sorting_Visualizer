const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
let delay=500 ;

const partition = async (arr, low, high, setArray, setx, sety, setp) => {
  let pivot = arr[high];
  setp(high);
  setArray([...arr]);
  let i = low - 1;

  for (let j = low; j < high; j++) {
    sety(j);
    if(arr[j]>=pivot)
      await sleep(delay);
    if (arr[j] < pivot) {
      i++;
      setx(i);
      await sleep(delay);
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await sleep(delay);
    }
  }
  setx(i+1);
  await sleep(delay);
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await sleep(delay);
  

  setx(-1);
  sety(-1);
  setp(-1);
  return i + 1;
};

const quickSort = async (arr, low, high, setArray, setx, sety, setp) => {
  if (low < high) {
    let pi = await partition(arr, low, high, setArray, setx, sety, setp);

    await Promise.all([
      quickSort(arr, low, pi - 1, setArray, setx, sety, setp),
      quickSort(arr, pi + 1, high, setArray, setx, sety, setp),
    ]);
  }
};

const quickSortHelper = (arr, setArray, setx, sety, setp) => {
  const low = 0;
  const high = arr.length - 1;
  quickSort(arr, low, high, setArray, setx, sety, setp);
};

export default quickSortHelper;

// const swap = (idx1, idx2, arr) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//       resolve();
//     }, 1000); // Adjust the delay to control animation speed
//   });
// };

// const part= async (l,r,a,x,y,setArray,setx,sety)=>{
//   let i=l,j=r;
// while(i<j){
//   if(a[i]<=a[j]){
//     i++;
//   }
//   else{
//     await swap(i,j-1,a);
//           setArray([...a]);
//           setx(i);
//           sety(j-1);
//     await swap(j,j-1,a);
//           setArray([...a]);
//           setx(j-1);
//           sety(j);
//     j--;
//   }
// }
// return i;
// }

// const rec = async (l, r, arr, x, y, setArray, setx, sety) => {
//   if (l < r) {
//     let pivotIdx = await part(l, r, arr, x, y, setArray, setx, sety);
//     await rec(l, pivotIdx - 1, arr, x, y, setArray, setx, sety);
//     await rec(pivotIdx + 1, r, arr, x, y, setArray, setx, sety);
//   }
// };
// const quickSort = async (array,x,y,setArray,setx,sety) => {
//   let arr = [...array];
//   await rec(0,arr.length-1,arr,x,y,setArray,setx,sety);
//   setx(-2);
//   sety(-2);
// };

// export default quickSort;