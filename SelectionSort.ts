function SelectionSort(arr:number[]):void{
    let  min:number=0
    for(let i=0;i<=arr.length-2;i++){
        min=i
        for(let j=i+1;j<=arr.length-1;j++){
        if(arr[j]<arr[min])
            min=j
    }
    let temp:number=arr[i]
    arr[i]=arr[min]
    arr[min]=temp

    }
    console.log(arr)
}
let array:number[]=[5,3,10,1,6,5]
SelectionSort(array)