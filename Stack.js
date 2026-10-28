"use strict";
class ArrayStack {
    items = [];
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
let arraystack = new ArrayStack();
arraystack.push(10);
arraystack.push(20);
arraystack.push(30);
console.log(arraystack.pop());
console.log(arraystack.isEmpty());
console.log(arraystack.peek());
console.log(arraystack.size());
console.log(arraystack);
/// linked list based
class StackNode {
    val;
    next;
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
class StackNodeList {
    head = null;
    count = 0;
    push(item) {
        let newNode = new StackNode(item, this.head);
        newNode.next = this.head;
        this.head = newNode;
        this.count++;
    }
    pop() {
        if (this.isEmpty())
            return undefined;
        else {
            let popvalue = this.head.val;
            this.head = this.head.next;
            this.count--;
            return popvalue;
        }
    }
    peek() {
        if (this.isEmpty())
            return undefined;
        else {
            return this.head.val;
        }
    }
    isEmpty() {
        return this.count == 0;
    }
    size() {
        return this.count;
    }
    display() {
        let elemets = [];
        let current = this.head;
        while (current != null) {
            elemets.unshift(current.val);
            current = current.next;
        }
        console.log("null=>" + elemets.join("=>"));
    }
}
let stacklist = new StackNodeList();
stacklist.push('a1');
stacklist.push('a2');
stacklist.push('a3');
stacklist.push('a4');
console.log(stacklist.pop());
console.log(stacklist.peek());
console.log(stacklist.size());
stacklist.display();
