//checking strings equal or not
let str1:string = "hello"
let str2:string="hell"
if(str1===str2)
    console.log(str1.concat(str2))
else 
    console.log("Strings are diffrent")




//printing ascii value of a string 
for(const val of str1){
    console.log(val.charCodeAt(0))
}
let str6:number[]=[...str2].map((char)=>char.charCodeAt(0))
console.log(str6)




// input : Hi Sadiya 
// output : ay idasih


function StringRevers(str:string):void{
    let copyStr:string[]=[]
    let str1:string[]=[...str]
    for(let i=0;i<str.length;i++){
        if(str1[i]==' ')
            copyStr[i]=str1[i]
    }
    let j:number=0
    for(let i=str.length-1;i>=0;i--){
      if(str1[i]!=" "){
        while(copyStr[j]==" ")
        j++;
      copyStr[j]=str1[i]
      j++;}
    }
    console.log(copyStr.join(''))
}
StringRevers("hi sadiya")



/// input: hi Sadiya Output:ih ayidas



function ReverseString1(str:string):void{
    let rev:string[]=str.split(' ')
    let revString:string[]=[]
    let i:number=0
    for(let val of rev){
      revString[i]=[...val].reverse().join('')
      i++;
    }
    console.log(revString.join(' '))
}
ReverseString1("hi sadiya")


// remove the duplicate character from a string

let dup:string="sadiyaa"
console.log([...new Set(dup)].join(''))


// input:RAMA output: R-> 1 A->2 M->1

let letCount:string[]=[...dup]
for(let i=0;i<letCount.length;i++){
    let count=1
    if(letCount[i]!=" "){
    for(let j=i+1;j<letCount.length;j++){      
            if(letCount[i]==letCount[j]){
                letCount[j]=" "
                count++;}
        }
        console.log(`${dup[i]} -> `, count)
    }  
}

// input : abcab target:cabab output:found 

let orgStr:string="abcab"
let target:string="cabab"
let arr1:string[]=[...orgStr]
let arr2:string[]=[]
let flag:number=0
let k:number=orgStr.length-1
for(let i=0;i<orgStr.length;i++){
arr2[0]=arr1[k]
for(let j=0;j<orgStr.length-1;j++){
    arr2[j+1]=arr1[j]
}
if(target==arr2.join(''))
    flag=1
for(let m=0;m<orgStr.length;m++)
    arr1[m]=arr2[m]
}
if(flag==1)
    console.log("presnt")
else
    console.log("not present") 


/// input:Samsungelectronics output:  s s g
                                  //  a u e
                                //    m n 

let input:string="Samsungelectronics"
let input1:string[]=[...input]
let res:string[][]=[[],[],[]]
let n:number=Math.floor(input.length/3)
let l:number=0
for(let i=0;i<n;i++){
    for(let j=0;j<3;j++){
        res[j][i]=input1[l]
         l++
        }
}
console.log(res,n)