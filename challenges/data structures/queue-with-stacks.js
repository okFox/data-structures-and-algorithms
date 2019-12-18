class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
  
class Stack {
  constructor(value = null) {
    this.top = new Node(value);
  }
  
  push(value) { 
    this.top = new Node(value);
  }
  
  pop() {
    const topValue = this.top.value;
    this.top = this.top.next;
    return topValue;
  }

  peek() { 
    return this.top;
  }

}

class PseudoQueue {
  constructor(value) {
    this.pushStack = new Stack(value);
    this.pullStack = new Stack();
  }

  //which inserts value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value) {
    if(this.pullStack !== null){
      this.resetStacks();
    }
    this.pushStack.push(value);
  }

  //which inserts value into the PseudoQueue, using a first-in, first-out approach.
  dequeue() {
    if(this.pullStack.peek() !== null) {
      return (this.pullStack.top).pop();
    } else {
      while(this.next !== null) {
        this.pushStack.top = this.pullStack.top; 
      }
      return (this.pullStack.top).pop();
    }
  }

  resetStacks() {
    let current = this.pullStack.top;
    while(current.next !== null) {
      this.pullstack.top.pop();
      this.pushStack.push();
    } 
  }
}


module.exports = { PseudoQueue,
  Node, Stack };
