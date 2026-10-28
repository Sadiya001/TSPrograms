"use strict";
let binNum = 12;
let result = [];
let b = 0;
while (binNum > 0) {
    let reminder = binNum % 2;
    result[b] = reminder;
    b++;
    binNum = Math.floor(binNum / 2);
}
console.log(result.reverse().join(''));
let decimalNum = 12;
let binaryStr = decimalNum.toString(2);
console.log(binaryStr);
