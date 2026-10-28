"use strict";
function fibnocciseries(n) {
    let f1 = 0;
    let f2 = 1;
    console.log(`${f1}`);
    if (n > 1)
        console.log(`${f2}`);
    for (let i = 2; i < n; i++) {
        let f3 = f1 + f2;
        console.log(f3);
        f1 = f2;
        f2 = f3;
    }
}
fibnocciseries(6);
