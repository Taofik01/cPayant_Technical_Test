// Implementing a simple data structure with arrays
class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value); // Adding to the array
    }

    pop() {
        if (this.isEmpty())  throw new Error ('Stack is empty!');

        return this.items.pop(); // Remove the last element
    }

    isEmpty() {
        return this.items.length === 0;  // Check if the array is empty
    }

    peek() {
        if (this.isEmpty())  throw new Error ('Stack is Empty');
        return this.items[this.items.length - 1]; // Return the last element
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(value) {
        this.queue.push(value);  //Add to the end of the array
    }

    dequeue() {
        if (this.isEmpty())  throw new Error ('Queue is empty!');
        return this.queue.shift(); // Remove the first element
    }

    isEmpty () {
        return this.queue.length === 0;  // Check if the array is empty
    }

    peek () {
        if (this.isEmpty())  throw new Error ('Queue is empty!');
        return this.queue[0]; // Return the first element
    }
}

module.exports = {Stack, Queue}