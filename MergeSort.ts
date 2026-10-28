function Merge(arr:number[],low:number,mid:number,high:number):void{
    let i=low
    let j=mid+1
    let k=0
    var c:number[]=[]
    while(i<=mid&&j<=high){
        if(arr[i]<arr[j])
            c[k++]=arr[i++]
        else
            c[k++]=arr[j++]
    }
    while(i<=mid)
        c[k++]=arr[i++]
    while(j<=high)
        c[k++]=arr[j++]
    for(let m=0;m<c.length;m++)
        arr[low+m]=c[m]
}
function MergeSort(arr:number[],low:number,high:number):void{
    if(low<high){
    let mid:number=Math.floor((low+high)/2)
    MergeSort(arr,low,mid)
    MergeSort(arr,mid+1,high)
    Merge(arr,low,mid,high)
    }
}
let array:number[]=[10,2,1,13,5]
MergeSort(array,0,array.length-1)
console.log(array);