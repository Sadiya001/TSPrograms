"use strict";
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    while (true) {
        while (pivot > arr[i])
            i++;
        while (pivot < arr[j])
            j--;
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        else
            break;
    }
    let temp = arr[j];
    arr[j] = pivot;
    pivot = arr[j];
    return j;
}
function QuickSort(arr, low, high) {
    if (low < high) {
        let k = partition(arr, low, high);
        QuickSort(arr, low, k - 1);
        QuickSort(arr, k + 1, high);
    }
}
let array = [19, 3, 45, 46, 200];
QuickSort(array, 0, array.length - 1);
console.log(array);
