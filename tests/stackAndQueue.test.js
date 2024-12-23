const { Stack, Queue } = require ('../src/stackAndQueue');

test('Stack Operations', () => {
     const stack = new Stack();
     expect(stack.isEmpty()).toBe(true);

     stack.push(10);
     stack.push(20);
     expect(stack.peek()).toBe(20);


     expect(stack.pop()).toBe(20);
     expect(stack.pop()).toBe(10);
     expect(()=> stack.pop()).toThrow('Stack is empty!');
})

test ('Queue Operations', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.peek()).toBe(10);

    
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(()=> queue.dequeue()).toThrow('Queue is empty!');

})