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
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        }
        else {
            let current = this.head;
            while (current.next != this.head)
                current = current.next;
            newNode.next = this.head;
            this.head = newNode;
            current.next = this.head;
        }
        this.size++;
    }
    insertEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        }
        else {
            let current = this.head;
            while (current.next != this.head)
                current = current.next;
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }
    deleteValue(value) {
        if (!this.head)
            return false;
        let current = this.head;
        if (this.head.data == value) {
            if (this.head.next == this.head) {
                this.head = null;
                this.size--;
                return true;
            }
            else {
                while (current.next != this.head)
                    current = current.next;
                this.head = this.head.next;
                current.next = this.head;
                this.size--;
                return true;
            }
        }
        else {
            while (current.next !== this.head && current.next.data !== value)
                current = current.next;
            if (current.next != this.head) {
                current.next = current.next.next;
                this.size--;
                return true;
            }
        }
        return false;
    }
    display() {
        let elemets = [];
        let current = this.head;
        if (!this.head) {
            console.log("Empty List -> null");
            return;
        }
        do {
            elemets.push(current.data);
            current = current.next;
        } while (current != this.head);
        console.log(elemets.join(" => ") + " => (Loops back to " + this.head.data + ")");
    }
    contains(value) {
        if (!this.head)
            return false;
        let current = this.head;
        do {
            if (current.data == value)
                return true;
            current = current.next;
        } while (current != this.head);
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
