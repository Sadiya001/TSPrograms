 function intToRoman(num:number):string{
    let map:[number,string][]=[[1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[5,"V"],[4,"IV"],[1,"I"]]
    let result:string=''
    while(num>0){
        for(const [value,symbol] of map ){
          if(num>=value){
            result=result+symbol
            num=num-value
          }
        }
    }
 return result
 }
 function romanToInt(s:string):number{
    const romanMap: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let res:number=0
    for(let i=0;i<s.length;i++)
    {
        let curval=romanMap[s[i]]
        let nextval=romanMap[s[i+1]]
        if(curval<nextval)
            res=res-curval
        else
            res=res+curval
    }
    return res 
 }
 console.log(intToRoman(490))
 console.log(romanToInt("CDXC"))