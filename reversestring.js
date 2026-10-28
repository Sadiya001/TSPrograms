"use strict";
function revrerseString1(str) {
    return str.split('').reverse().join('');
}
function revrerseString2(str1) {
    return [...str1].reverse().join('');
}
function revrerseString3(str3) {
    let str4 = "";
    for (let i = str3.length - 1; i >= 0; i--)
        str4 = str4 + str3[i];
    return str4;
}
function revrerseString4(str5) {
    let str6 = "";
    for (const char of str5)
        str6 = char + str6;
    return str6;
}
console.log(revrerseString1("sadi"));
console.log(revrerseString2("sadi"));
console.log(revrerseString3("sadi"));
console.log(revrerseString4("sadi"));
