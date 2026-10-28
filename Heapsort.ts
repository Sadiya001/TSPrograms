function heapyfy(arr:number[],size:number,j:number):void{
    let rn:number=j
    let lindex:number=j*2+1
    let rindex:number=j*2+2
    if(lindex<size&&arr[rn]<arr[lindex])
        rn=lindex
    if(rindex<size&&arr[rn]<arr[rindex])
        rn=rindex
    if(rn!=j){
        let temp:number=arr[j]
        arr[j]=arr[rn]
        arr[rn]=temp
        heapyfy(arr,size,rn)
    }   
}

function Heapsort(arr:number[]):void{
    let len=arr.length
    for(let j=Math.floor(len/2)-1;j>=0;j--)
        heapyfy(arr,len,j)
    for(let j=len-1;j>0;j--){
        let temp:number=arr[0]
        arr[0]=arr[j]
        arr[j]=temp
        heapyfy(arr,j,0)
    }
    
}
let array:number[]=[2,56,1,4,78]
Heapsort(array)
console.log(array)