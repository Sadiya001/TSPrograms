function reversenumber(n:number):number{
    let rev=0;
    while(n>0){
        let rem=n%10
        rev=rev*10+rem
        n=Math.floor(n/10)
    }
    return rev
}
let num=reversenumber(54321)
console.log(num)

function reverse(a:number):number{
    //return parseInt(a.toString().split('').reverse().join(''))
    return parseInt([...(a.toString())].reverse().join())

}
let n=reverse(54321)
console.log(n)