class ArrayStack<T>{
    private items:T[]=[]
    public push(item:T){
        this.items.push(item);
    }
    public pop():T|undefined{
        return this.items.pop();
    }
    public peek():T|undefined{
        return this.items[this.items.length-1]
    }
    public size():number{
        return this.items.length
    }
    public isEmpty():boolean{
        return this.items.length===0
    }
}
let arraystack=new ArrayStack<Number>()
arraystack.push(10)
arraystack.push(20)
arraystack.push(30)
console.log(arraystack.pop())
console.log(arraystack.isEmpty())
console.log(arraystack.peek())
console.log(arraystack.size())
console.log(arraystack)

/// linked list based


class StackNode<T> {
    constructor(
        public val: T, 
        public next: StackNode<T> | null = null
    ) {}
}
class StackNodeList<T>{
    private head:StackNode<T>|null=null
    private count:number=0

    public push(item:T){
        let newNode=new StackNode(item,this.head)
        newNode.next=this.head
        this.head=newNode
        this.count++
    }
    public pop():T|undefined{
        if(this.isEmpty()) return undefined
        else{
        let popvalue=this.head!.val
        this.head=this.head!.next
        this.count--
        return popvalue
    }
    }
    public peek():T|undefined{
        if(this.isEmpty()) return undefined
        else{
            return this.head!.val
        }

    }
    public isEmpty():boolean{
        return this.count==0

    }
    public size():number{
        return this.count
    }
    public display(){
        let elemets:T[]=[]
        let current=this.head
        while(current!=null){
            elemets.unshift(current.val)
            current=current.next
        }
        console.log("null=>" + elemets.join("=>") )
    }
}
let stacklist=new StackNodeList<string>();
stacklist.push('a1')
stacklist.push('a2')
stacklist.push('a3')
stacklist.push('a4')
console.log(stacklist.pop())
console.log(stacklist.peek())
console.log(stacklist.size())
stacklist.display()
