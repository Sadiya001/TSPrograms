"use strict";
function heapyfy(arr, size, j) {
    let rn = j;
    let lindex = j * 2 + 1;
    let rindex = j * 2 + 2;
    if (lindex < size && arr[rn] < arr[lindex])
        rn = lindex;
    if (rindex < size && arr[rn] < arr[rindex])
        rn = rindex;
    if (rn != j) {
        let temp = arr[j];
        arr[j] = arr[rn];
        arr[rn] = temp;
        heapyfy(arr, size, rn);
    }
}
function Heapsort(arr) {
    let len = arr.length;
    for (let j = Math.floor(len / 2) - 1; j >= 0; j--)
        heapyfy(arr, len, j);
    for (let j = len - 1; j > 0; j--) {
        let temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        heapyfy(arr, j, 0);
    }
}
let array = [2, 56, 1, 4, 78];
Heapsort(array);
console.log(array);
