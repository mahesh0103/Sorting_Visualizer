const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let delay=500;

const merge = async(l,mid,r,a,setArray,left,right,tot,setleft,setright,settot)=>{
    let z=[];
    z.length=r-l+1;
    let i=l,j=mid+1,k=0;
    const lo = Array.from({ length: mid - l + 1 }, (_, index) => index + l);
    const hi = Array.from({ length: r - mid }, (_, index) => index + mid + 1);
    setleft([...lo]);
    setright([...hi]);
    setArray([...a]);
    await sleep(delay);
    while(i<=mid && j<=r){
        if(a[i]<=a[j]){
            z[k]=a[i];
            k++;
            i++;
        }
        else{
            z[k]=a[j];
            k++;
            j++;
        }
    }
    while(i<=mid){
        z[k]=a[i];
        k++;
        i++;
    }
    while(j<=r){
        z[k]=a[j];
        k++;
        j++;
    } 
    i=l;
    k=0;
    while(i<=r){
        a[i]=z[k];
        k++;
        i++;
    }
    let to=[];
    for(let x=l;x<=r;x++){
        to.push(x);
    }
    let temp=[];
    setleft([...temp]);
    setright([...temp]); 
    settot([...to]);
    await sleep(delay);
    setArray([...a]);
    await sleep(delay);
    settot([...temp]);
}

const  rec=async (l,r,arr,setArray,left,right,tot,setleft,setright,settot)=>{
    if(l>=r)    return ;
    let mid = (l+r)/2;
    mid=Math.floor(mid);
    await rec(l,mid,arr,setArray,left,right,tot,setleft,setright,settot);
    await rec(mid+1,r,arr,setArray,left,right,tot,setleft,setright,settot);
    await merge(l,mid,r,arr,setArray,left,right,tot,setleft,setright,settot);
}
const mergeSort = async (array,setArray,left,right,tot,setleft,setright,settot) => {
    let arr = [...array];
    await rec(0,arr.length-1,arr,setArray,left,right,tot,setleft,setright,settot);
  };

  export default mergeSort;