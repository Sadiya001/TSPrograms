function revrerseString1(str:String):String{
    return str.split('').reverse().join('')
}


function revrerseString2(str1:String):String{
    return [...str1].reverse().join('')
}


function revrerseString3(str3:String):String{
   let str4:String=""
    for(let i=str3.length-1;i>0;i--)
        str4=str4+str3[i]
return str4
}


function revrerseString4(str5:String):String{
    let str6:String=""
    for(const ch of str5)
        str6=ch+str6
    return str6
}


console.log(revrerseString1("sadi"))
console.log(revrerseString2("sadi"))
console.log(revrerseString3("sadi"))
console.log(revrerseString4("sadi"))