class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
    
class AnimalShelter {
  constructor() {
    this.front = null;
    this.last = null;
  }
      
 
    
  toString() {
    const nodesArray = [];
    let node = this.head;
    while(node) {
      nodesArray.push(node.value);
      node = node.next;
    }
    return nodesArray.join('->');
  }

  enqueue(node) {
    if(!this.front) {
      this.front = node;
      this.last = node;
    } else {
      this.last.next = node;
    }
    return node;
  }
  dequeue(pref = null) {
    if(!pref) {
      const popped = this.front.value;
      this.front = this.front.next;
      return popped;
    } else {
      let current = this.front;
      while(current.next.value !== pref) {
        current = current.next;
        if(!current.next) {
          return 'sorry, no animal for you';
        }
      }
      const found = current.next;
      current.next = found.next;
      return found;


    }
  }
}

module.exports = {
  AnimalShelter,
  Node
};




