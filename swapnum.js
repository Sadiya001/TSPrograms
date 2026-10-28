"use strict";
function swapnum(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b);
}
swapnum(-10, -20);
function swapnum1(a, b) {
    const temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
swapnum1(-10, -20);
