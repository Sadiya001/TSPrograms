function triangle(n:number):void{  
    for(let i=1;i<=n;i++){
        let str:String=""
       for(let j=n;j>i;j--)
        str+=" "
       for(let k=1;k<=i;k++)
         str+="*" 
       for(let k=1;k<i;k++)
         str+="*"  
    console.log(str) 
    }   
}
triangle(4)
function rectangle(rows:number,coloum:number):void{  
    for(let i=1;i<=rows;i++){
        let str:String=""
       for(let j=1;j<=coloum;j++){
        if(i==1||i==rows||j==1||j==coloum)
         str+="* "
        else
            str+="  "
         }
    console.log(str) 
    }   
}
rectangle(5,5)