let binNum:number=12
let result:number[]=[]
let b:number=0
while(binNum>0){
    let reminder:number=binNum%2
    result[b]=reminder
    b++
    binNum=Math.floor(binNum/2)
}
console.log(result.reverse().join(''))

let decimalNum: number = 12;
let binaryStr: string = decimalNum.toString(2);
console.log(binaryStr); 
