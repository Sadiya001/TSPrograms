"use strict";
class ListNode {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SingleLinkedList {
    head = null;
    size = 0;
    insertFront(data) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    insertEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next != null)
                current = current.next;
            current.next = newNode;
        }
        this.size++;
    }
    deleteValue(value) {
        if (!this.head)
            return false;
        let current = this.head;
        if (this.head.data == value) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        while (current.next !== null && current.next.data !== value)
            current = current.next;
        if (current.next != null) {
            console.log(current.data);
            current.next = current.next.next;
            this.size--;
            return true;
        }
        return false;
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
        while (current.next != null) {
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
