function Binarysearch(num:number[],target:number):number{
    let low:number=0
    let res:number=0
    let high:number=num.length-1
     while(low<=high){
         let mid:number=Math.floor((low+high)/2)
        if(num[mid]==target){
            res=1
            break
        }
        else if(num[mid]>target)
            high=mid-1
        else
            low=mid+1    
    }
   return res

}
let result=Binarysearch([10,20,30,40,],90)
if(result==0)
console.log("key not found")
else 
console.log("key found")

