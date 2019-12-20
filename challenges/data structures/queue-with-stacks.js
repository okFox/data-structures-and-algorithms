class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
  
class Stack {
  constructor(value) { //maybe you can remove null?  should always have value for later checks
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
    this.pushStack = new Stack(value); //what if you created both stacks with very first value?
    this.pullStack = new Stack(null);
  }

  //which inserts value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value) {
    // if(this.pullStack.top !== null){
      
    //   this.resetStacks();
    // }
    this.pushStack.push(value);
  }

  //which inserts value into the PseudoQueue, using a first-in, first-out approach.
  dequeue() {
    if(this.pullStack.top !== null) { //if there is still something in the pullstack
      return this.pullStack.pop();
    } else {    
      while(this.pushStack.top !== null) {
        let jump = this.pushStack.pop();
        this.pullStack.push(jump);
      //when pullstack is empty, push everything from pushstack to pullstack and return top of pushstack
      // let current = this.pushStack.top;
      // while(current.value !== null) {
      //   let jump = this.pushStack.pop();
      //   this.pullStack.push(jump); 
      // }
      
    }
    return this.pullStack.pop();
  }

  // resetStacks() {
  //   //this fills up the pullStack again and now the nodes are in the right order

  //   while(this.pushStack.top !== null) {
  //     let jump = this.pushStack.pop();
  //     this.pullStack.push(jump);
  //   } 
  // }
}


module.exports = { PseudoQueue,
  Node, Stack };
