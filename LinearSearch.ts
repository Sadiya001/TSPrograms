    var index:number=0
    function LinearSearch(num:number[],target:number):number{
         let res:number=0    
        //  for(const val in num){
        //     if (num[val]===target){
        //         res=1
        //         index=parseInt(val)
        //     } 
         for(const val of num){
            if (val===target){
                res=1
                break
            } 
            index++;
         }
         return res
}
let result=LinearSearch([10,20,30,40],30)
if(result==0)
    console.log("key not found in array")
else
    console.log("key found at",index)


