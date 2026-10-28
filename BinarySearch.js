"use strict";
function Binarysearch(num, target) {
    let low = 0;
    let res = 0;
    let high = num.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (num[mid] == target) {
            res = 1;
            break;
        }
        else if (num[mid] > target)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return res;
}
let result = Binarysearch([10, 20, 30, 40,], 90);
if (result == 0)
    console.log("key not found");
else
    console.log("key found");
//checking strings equal or not
let str1 = "hello";
let str2 = "hell";
if (str1 === str2)
    console.log(str1.concat(str2));
else
    console.log("Strings are diffrent");
//printing ascii value of a string 
for (const val of str1) {
    console.log(val.charCodeAt(0));
}
let str6 = [...str2].map((char) => char.charCodeAt(0));
console.log(str6);
