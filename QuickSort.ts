function partition(arr:number[],low:number,high:number):number{
    let pivot:number=arr[low]
    let i:number=low
    let j:number=high
    while(true){
        while(pivot>arr[i])
            i++
        while(pivot<arr[j])
            j--
        if(i<j){
            let temp:number=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
        else 
            break

    }
    let temp=arr[j]
    arr[j]=pivot
    pivot=arr[j]
    return j
}
function QuickSort(arr:number[],low:number,high:number):void{
    if(low<high){
        let k:number=partition(arr,low,high)
        QuickSort(arr,low,k-1)
        QuickSort(arr,k+1,high)
    }
}
let array:number[]=[19,3,45,46,200]
QuickSort(array,0,array.length-1)
console.log(array)