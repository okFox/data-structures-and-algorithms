class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  

  append(value) {
    const newNode = new Node(value);
    let current = this.head;
    while(current) {
      if(current.value !== null) 
        current = current.next;
    }
    current.next = newNode;
  }
  includes(value) {
    let current = this.head;
    while(current) {
      if(value === current.value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  toString() {
    const values = [];
    let current = this.head;
    while(current) {
      values.push(current.value);
      current = current.next;
    }
    return String(values);
  }
}
module.exports = {
  LinkedList
};
