class Node {
  constructor(value) {
    this.value = value;
    this.next = next;
  }
}
  
class Stack {
  constructor(value) { //maybe you can remove null?  should always have value for later checks
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
    if(this.pullStack.top !== null){
      this.resetStacks();
    }
    this.pushStack.push(value);
  }

  //which inserts value into the PseudoQueue, using a first-in, first-out approach.
  dequeue() {
    if(this.pullStack.peek() !== null) { //if there is still something in the pullstack
      return (this.pullStack).pop();
    } else {                                    //when pullstack is empty, push everything from pushstack to pullstack and return top of pushstack
      let current = this.pushStack.top;
      while(current.value !== null) {
        let jump = this.pushStack.pop();
        this.pullStack.push(jump); 
        return (this.pushStack).pop();
      }}
  }

  resetStacks() {
    let current = this.pushStack.top;
    while(current.next !== null) {
      let jump = this.pushStack.pop();
      this.pullStack.push(jump);
    } 
  }
}


module.exports = { PseudoQueue,
  Node, Stack };
