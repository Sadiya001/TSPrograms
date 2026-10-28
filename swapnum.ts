function swapnum(a:number , b:number):void{
    a=a+b
    b=a-b
    a=a-b
    console.log(a,b)
}
swapnum(-10,-20)

function swapnum1(a:number , b:number):void{
    const temp:number=a
    a=b
    b=temp
    console.log(a,b)
}
swapnum1(-10,-20)