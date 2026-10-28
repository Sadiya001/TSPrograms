"use strict";
function longestPalindrome(s) {
    let num = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = s.substring(i, j);
            if (substr === ([...substr].reverse().join(''))) {
                if (substr.length > num) {
                    num = substr.length;
                    str = substr;
                }
            }
        }
    }
    return str;
}
;
console.log(longestPalindrome("abcabcbb"));
let org = "fun-uncle";
let tar = "cle";
let flag = 0;
for (let i = 0; i <= (org.length - tar.length); i++) {
    let sub = '';
    let j = 1;
    let k = i;
    while (j <= tar.length) {
        sub = sub + org.charAt(k);
        j++;
        k++;
    }
    // console.log(sub)
    if (sub == tar)
        flag = 1;
}
if (flag == 1)
    console.log("found");
let array2d = [
    [1, 2, 3],
    [4, 5, 6]
];
let array3d = [
    [
        [1, 2, 3],
        [2.3]
    ],
    [
        [4, 5, 4]
    ],
    [
        [2, 6, 7],
        [0, 0, 0]
    ]
];
//console.log(array2d)
//console.log(array3d)
//console.log(array3d[2][0][2])
//console.log(array2d[1][1])
let arr1 = [
    [
        [2, 3, 4],
        [3, 5]
    ],
    [
        [1, 2, 3]
    ]
];
let arr2 = [
    [
        [2, 3, 4],
        [3, 5]
    ],
    [
        [1, 2, 3]
    ]
];
let arr3 = [];
for (let i = 0; i < arr1.length; i++) {
    arr3[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
        arr3[i][j] = [];
        for (let k = 0; k < arr1[i][j].length; k++) {
            arr3[i][j][k] = (arr1[i][j][k] * arr2[i][j][k]);
        }
    }
}
console.log(arr3);
let obj1 = {
    num: 8,
    Username: "sadiya"
};
console.log(Object.values(obj1));
