"use strict";
var dec = 1010;
var binnum = 0;
let i = 0;
while (dec > 0) {
    let rem = dec % 10;
    binnum = binnum + (rem * Math.pow(2, i));
    i++;
    dec = Math.floor(dec / 10);
}
console.log(binnum);
var decNum = 0b1010;
console.log(decNum);
