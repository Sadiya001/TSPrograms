var dec:number=1010
var binnum:number=0
let i:number=0;
while(dec>0){
    let rem:number=dec%10
    binnum=binnum+(rem*Math.pow(2,i))
    i++
    dec=Math.floor(dec/10)

}
console.log(binnum)

var decNum:number=0b1010
console.log(decNum)