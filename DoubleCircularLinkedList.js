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
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.head.prev = this.tail;
            this.tail.next = this.head;
        }
        this.size++;
    }
    insertEnd(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.prev = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            newNode.next = this.head;
            this.tail = newNode;
            this.head.prev = this.tail;
        }
        this.size++;
    }
    deleteValue(value) {
        if (!this.head)
            return false;
        let current = this.head;
        let found = false;
        do {
            if (current.data == value) {
                found = true;
                break;
            }
            current = current.next;
        } while (current != this.head);
        if (!found)
            return false;
        if (current == this.head) {
            if (this.head == this.head.next) {
                this.head = null;
                this.tail = null;
                this.size--;
                return true;
            }
            else {
                this.head = this.head.next;
                this.head.prev = this.tail;
                this.tail.next = this.head;
                this.size--;
                return true;
            }
        }
        else if (current == this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
            this.size--;
            return true;
        }
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            this.size--;
            return true;
        }
    }
    display() {
        let elemets = [];
        if (!this.head) {
            console.log("empty");
            return;
        }
        let current = this.head;
        do {
            elemets.push(current.data);
            current = current.next;
        } while (current != this.head);
        console.log(elemets.join("=>"));
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
