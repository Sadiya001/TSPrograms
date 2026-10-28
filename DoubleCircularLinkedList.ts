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
            this.head = newNode;
            this.tail = newNode;
            newNode.next=newNode
            newNode.prev=newNode
        } else {        
            newNode.next = this.head; 
            this.head.prev = newNode; 
            this.head = newNode;
            this.head.prev=this.tail
            this.tail!.next=this.head      
        }
        this.size++

    }

    public insertEnd(data:T):void{
        const newNode=new ListNode(data)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
            newNode.next=newNode
            newNode.prev=newNode
        }
        else{
            this.tail!.next=newNode
            newNode.prev=this.tail
            newNode.next=this.head
            this.tail=newNode
            this.head.prev=this.tail
       
        }
        this.size++
    }


    public deleteValue(value:T):boolean{
        if(!this.head) 
            return false
        let current:ListNode<T>|null=this.head
        let found=false
        do{
            if(current.data==value){
            found=true
            break
            }
            current=current.next!
         }while(current!=this.head)
       if(!found) return false
       if(current==this.head){
        if(this.head==this.head.next){
            this.head=null
            this.tail=null
            this.size--
            return true
        }
        else{
            this.head=this.head.next!
            this.head.prev=this.tail
            this.tail!.next=this.head
            this.size--
            return true
        }
       }
       else if(current==this.tail){
        this.tail=this.tail.prev!
        this.tail.next=this.head
        this.head.prev=this.tail
        this.size--
        return true
       }
       else{
        current.prev!.next = current.next;
        current.next!.prev = current.prev;
        this.size--;
        return true;
       }

    }

    public display():void{
        let elemets:T[]=[]
        if(!this.head){
            console.log("empty")
            return
        }

        let current=this.head!
        do{
            elemets.push(current.data)
            current=current.next!
        }while(current!=this.head)
        console.log(elemets.join("=>") )
    }
    public contains(value:T):boolean{
        if(!this.head)
            return false
        let current:ListNode<T>|null=this.head
        do{
            if(current.data==value)
                return true
            current=current.next!
        }while(current!=this.head)
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
