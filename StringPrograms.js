"use strict";
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
// input : Hi Sadiya 
// output : ay idasih
function StringRevers(str) {
    let copyStr = [];
    let str1 = [...str];
    for (let i = 0; i < str.length; i++) {
        if (str1[i] == ' ')
            copyStr[i] = str1[i];
    }
    let j = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str1[i] != " ") {
            while (copyStr[j] == " ")
                j++;
            copyStr[j] = str1[i];
            j++;
        }
    }
    console.log(copyStr.join(''));
}
StringRevers("hi sadiya");
/// input: hi Sadiya Output:ih ayidas
function ReverseString1(str) {
    let rev = str.split(' ');
    let revString = [];
    let i = 0;
    for (let val of rev) {
        revString[i] = [...val].reverse().join('');
        i++;
    }
    console.log(revString.join(' '));
}
ReverseString1("hi sadiya");
// remove the duplicate character from a string
let dup = "sadiyaa";
console.log([...new Set(dup)].join(''));
// input:RAMA output: R-> 1 A->2 M->1
let letCount = [...dup];
for (let i = 0; i < letCount.length; i++) {
    let count = 1;
    if (letCount[i] != " ") {
        for (let j = i + 1; j < letCount.length; j++) {
            if (letCount[i] == letCount[j]) {
                letCount[j] = " ";
                count++;
            }
        }
        console.log(`${dup[i]} -> `, count);
    }
}
// input : abcab target:cabab output:found 
let orgStr = "abcab";
let target = "cabab";
let arr1 = [...orgStr];
let arr2 = [];
let flag = 0;
let k = orgStr.length - 1;
for (let i = 0; i < orgStr.length; i++) {
    arr2[0] = arr1[k];
    for (let j = 0; j < orgStr.length - 1; j++) {
        arr2[j + 1] = arr1[j];
    }
    if (target == arr2.join(''))
        flag = 1;
    for (let m = 0; m < orgStr.length; m++)
        arr1[m] = arr2[m];
}
if (flag == 1)
    console.log("presnt");
else
    console.log("not present");
/// input:Samsungelectronics output:  s s g
//  a u e
//    m n 
let input = "Samsungelectronics";
let input1 = [...input];
let res = [[], [], []];
let n = Math.floor(input.length / 3);
let l = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
        res[j][i] = input1[l];
        l++;
    }
}
console.log(res, n);
