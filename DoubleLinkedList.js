"use strict";
class ListNode {
    data;
    next = null;
    prev = null;
    constructor(data) {
        this.data = data;
    }
}
class SingleLinkedList {
    head = null;
    tail = null;
    size = 0;
    insertFront(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            // Case A: The list is empty
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // Case B: The list already has nodes
            newNode.next = this.head; // New node points forward to old head
            this.head.prev = newNode; // Old head points backward to new node
            this.head = newNode; // Move head reference to the front
        }
        this.size++;
    }
    insertEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = null;
            this.tail = newNode;
        }
        this.size++;
    }
    deleteValue(value) {
        if (!this.head)
            return false;
        let current = this.head;
        while (current !== null && current.data !== value) {
            current = current.next;
        }
        if (current == null)
            return false;
        else if (current == this.head) {
            this.head = this.head.next;
            if (this.head)
                this.head.prev = null;
            else
                this.tail = null;
            return true;
        }
        else if (current == this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return true;
        }
        // if(this.tail)
        //     this.tail.next=null
        // else
        //     this.head=null
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            return true;
        }
    }
    display() {
        let elemets = [];
        let current = this.head;
        while (current != null) {
            elemets.push(current.data);
            current = current.next;
        }
        console.log(elemets.join("=>") + "=>null");
    }
    contains(value) {
        if (!this.head)
            return false;
        let current = this.head;
        while (current != null) {
            if (current.data == value)
                return true;
            current = current.next;
        }
        return false;
    }
}
let singlelist = new SingleLinkedList();
singlelist.insertEnd(10);
singlelist.insertEnd(20);
singlelist.insertFront(30);
singlelist.insertEnd(40);
singlelist.display();
singlelist.deleteValue(10);
singlelist.display();
console.log(singlelist.contains(20));
