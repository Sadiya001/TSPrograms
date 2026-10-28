"use strict";
function InsertionSort(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let item = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > item) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = item;
    }
}
let array = [1, 45, 2, 6, 3, 90];
InsertionSort(array);
console.log(array);
