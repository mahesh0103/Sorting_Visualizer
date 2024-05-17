const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

let delay = 500;

const heapify = async (i, n, a, setArray, setPar, setL, setR) => {
    let z = i;
    setPar(i);
    let l = 2 * i + 1;
    if (l < n) setL(l);
    let r = 2 * i + 2;
    if (r < n) setR(r);
    await sleep(delay);
    if (l < n && a[l] > a[z]) {
        setPar(l);
        setL(z);
        z = l;
    }
    await sleep(delay);
    if (r < n && a[r] > a[z]) {
        setPar(r);
        setR(z);
        z = r;
    }
    if (z !== i) {
        swap(z, i, a);
        await sleep(delay);
        setArray([...a]);
        setPar(i);
        setR(z);
        await sleep(delay);
        setL(-1);
        setR(-1);
        setPar(-1);
        await heapify(z, n, a, setArray, setPar, setL, setR);
    }
};

const heap = async (n, a, setArray, setPar, setL, setR) => {
    for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
        setL(-1);
        setR(-1);
        setPar(-1);
        await sleep(delay / 4);
        await heapify(i, n, a, setArray, setPar, setL, setR);
    }
    for (let i = 0; i < n; i++) {
        await sleep(delay);
        setL(0);
        setR(n - i - 1);
        await sleep(delay);
        swap(0, n - i - 1, a);
        setArray([...a]);
        await sleep(delay / 4);
        setL(-1);
        setR(-1);
        setPar(-1);
        await heapify(0, n - i - 1, a, setArray, setPar, setL, setR);
    }
};

const heapSort = async (array, setArray, setPar, setL, setR) => {
    let arr = [...array];
    await heap(arr.length, arr, setArray, setPar, setL, setR);
    setPar(-2);
    setL(-2);
    setR(-2);
};

export default heapSort;
