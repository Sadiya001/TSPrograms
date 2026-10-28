"use strict";
function gcdsolver(a, b) {
    console.log(`GCD of ${a},${b} is`);
    while (b !== 0) {
        const rem = a % b;
        a = b;
        b = rem;
    }
    return a;
}
console.log(gcdsolver(8, 4));
