// ==========================================
// 1. ARRAY-BASED LINEAR QUEUE IMPLEMENTATION
// ==========================================
class ArrayQueue<T> {
    private items: T[] = [];

    // Add an item to the back of the line
    enqueue(item: T): void {
        this.items.push(item); // Appends to the end
    }

    // Remove and return an item from the front of the line
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        return this.items.shift(); // Removes from index 0 (shifts remaining elements)
    }

    // Look at the front item
    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        console.log("Queue (Front to Back): " + this.items.join(" -> "));
    }
}

// ==========================================
// 2. LINKED LIST-BASED LINEAR QUEUE IMPLEMENTATION
// ==========================================
class QueueNode<T> {
    constructor(
        public val: T, 
        public next: QueueNode<T> | null = null
    ) {}
}

class LinkedListQueue<T> {
    private head: QueueNode<T> | null = null; // Points to Front
    private tail: QueueNode<T> | null = null; // Points to Rear
    private count: number = 0;

    // O(1) operation: Add to the rear tail
    enqueue(item: T): void {
        const newNode = new QueueNode(item);
        if (this.tail === null) {
            // If empty, the new node is both the head and the tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Attach to the current tail's next
            this.tail = newNode;       // Move tail pointer to the new node
        }
        this.count++;
    }

    // O(1) operation: Remove from the front head
    dequeue(): T | undefined {
        if (this.isEmpty()) return undefined;
        
        const removedValue = this.head!.val;
        this.head = this.head!.next; // Shift head forward
        
        // If the queue becomes empty, clear the tail pointer too
        if (this.head === null) {
            this.tail = null;
        }
        
        this.count--;
        return removedValue;
    }

    peek(): T | undefined {
        return this.head ? this.head.val : undefined;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    size(): number {
        return this.count;
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        const values: T[] = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.val);
            current = current.next;
        }
        console.log("Queue (Front to Back): " + values.join(" -> "));
    }
}

// ==========================================
// 3. EXECUTION AND TESTING RUN
// ==========================================

console.log("--- TESTING ARRAY QUEUE ---");
const arrQueue = new ArrayQueue<string>();
arrQueue.enqueue("User A");
arrQueue.enqueue("User B");
arrQueue.enqueue("User C");
arrQueue.print(); // Output: User A -> User B -> User C

console.log("Dequeued:", arrQueue.dequeue()); // Output: User A
arrQueue.print(); // Output: User B -> User C


console.log("\n--- TESTING LINKED LIST QUEUE ---");
const llQueue = new LinkedListQueue<number>();
llQueue.enqueue(100);
llQueue.enqueue(200);
llQueue.enqueue(300);
llQueue.print(); // Output: 100 -> 200 -> 300

console.log("Dequeued:", llQueue.dequeue()); // Output: 100
llQueue.print(); // Output: 200 -> 300


// circular queue

class CircularQueue<T> {
    private items: (T | null)[];
    private head: number = 0;
    private tail: number = 0;
    private count: number = 0;
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.items = new Array(capacity).fill(null);
    }

    // Add item to the rear
    enqueue(item: T): boolean {
        if (this.isFull()) return false;
        this.items[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity; // Wrap around if at end
        this.count++;
        return true;
    }

    // Remove item from the front
    dequeue(): T | null {
        if (this.isEmpty()) return null;
        const item = this.items[this.head];
        this.items[this.head] = null;
        this.head = (this.head + 1) % this.capacity; // Wrap around if at end
        this.count--;
        return item;
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.capacity;
    }
}


// priority queue


class PriorityNode<T> {
    constructor(public val: T, public priority: number) {}
}

class PriorityQueue<T> {
    private elements: PriorityNode<T>[] = [];

    // Enqueue inserts based on priority rank (lower number = higher priority)
    enqueue(val: T, priority: number): void {
        const node = new PriorityNode(val, priority);
        let inserted = false;

        for (let i = 0; i < this.elements.length; i++) {
            if (node.priority < this.elements[i].priority) {
                this.elements.splice(i, 0, node);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            this.elements.push(node);
        }
    }

    dequeue(): T | undefined {
        const removed = this.elements.shift();
        return removed ? removed.val : undefined;
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }
}


// double queue

class Deque<T> {
    private items: T[] = [];

    addFront(item: T): void {
        this.items.unshift(item);
    }

    addRear(item: T): void {
        this.items.push(item);
    }

    removeFront(): T | undefined {
        return this.items.shift();
    }

    removeRear(): T | undefined {
        return this.items.pop();
    }

    peekFront(): T | undefined {
        return this.items[0];
    }

    peekRear(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}
