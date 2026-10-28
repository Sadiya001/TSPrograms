class ListNode<T>{
    public data:T;
    public next:ListNode<T>|null=null
    public prev:ListNode<T>|null=null
    constructor(data:T){
        this.data=data
    }
}
class SingleLinkedList<T>{
    private head:ListNode<T>|null=null
    private tail:ListNode<T>|null=null
    private size:number=0

    public insertFront(data:T):void{
        const newNode=new ListNode(data)
       if (!this.head) {
            // Case A: The list is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Case B: The list already has nodes
            newNode.next = this.head; // New node points forward to old head
            this.head.prev = newNode; // Old head points backward to new node
            this.head = newNode;      // Move head reference to the front
        }
        this.size++

    }

    public insertEnd(data:T):void{
        const newNode=new ListNode(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail!.next=newNode
            newNode.prev=this.tail
            newNode.next=null
            this.tail=newNode
       
        }
        this.size++
    }


    public deleteValue(value:T):boolean{
        if(!this.head) 
            return false
        let current:ListNode<T>|null=this.head
        while(current!==null&&current.data!==value){
            current=current.next
        }
        if(current==null)return false
        else if(current==this.head){
            this.head=this.head.next
        if(this.head)
            this.head.prev=null
        else
            this.tail=null
       return true 
    }
      else if(current==this.tail)
        {
            this.tail=this.tail.prev!
            this.tail.next=null
            return true
        }
        // if(this.tail)
        //     this.tail.next=null
        // else
        //     this.head=null
     else{
        current.prev!.next=current.next
        current.next!.prev=current.prev
        return true
        }     
    

    }

    public display(){
        let elemets:T[]=[]
        let current=this.head
        while(current!=null){
            elemets.push(current.data)
            current=current.next
        }
        console.log(elemets.join("=>") + "=>null")
    }
    public contains(value:T):boolean{
        if(!this.head)
            return false
        let current:ListNode<T>|null=this.head
        while(current!=null){
            if(current.data==value)
                return true
            current=current.next
        }
        return false

    }
}
let singlelist=new SingleLinkedList<number>()
singlelist.insertEnd(10)
singlelist.insertEnd(20)
singlelist.insertFront(30)
singlelist.insertEnd(40)
singlelist.display()
singlelist.deleteValue(10)
singlelist.display()
console.log(singlelist.contains(20))
