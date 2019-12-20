class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
  
class Stack {
  constructor(value) {
    this.top = value ? new Node(value) : null;
  }
  
  push(value) { 
    const top = this.top;
    this.top = new Node(value);
    this.top.next = top;
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
    this.pullStack = new Stack(null);
  }

  enqueue(value) {
    this.pushStack.push(value);
  }

  dequeue() {
    if(this.pullStack.top !== null) { 
      return this.pullStack.pop();
    } else {    
      while(this.pushStack.top !== null) {
        let jump = this.pushStack.pop();
        this.pullStack.push(jump);      
      }
      return this.pullStack.pop();
    }
  }
}


module.exports = {
  PseudoQueue,
  Node, Stack };
