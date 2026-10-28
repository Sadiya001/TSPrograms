"use strict";
function BubbleSort(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let j = 0; j <= arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
let array = [10, 4, 60, 3, 2];
BubbleSort(array);
