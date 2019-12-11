const LinkedList = require('../challenges/data structures/linkedList');

let linkedList;

beforeEach(() => {
  linkedList = new LinkedList();
});

describe('LinkedList operation', () => {
  it('can successfully instantiate an empty linked list', () => {
    expect(linkedList.head).toBeNull();
    expect(linkedList.length).toEqual(0);
  });
  it('can properly insert into the linked list', () => {
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.length).toEqual(1);
  });
  test('the head property points to the first node in the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.head.value).toEqual(1);
  });
  it('can insert multiple nodes into the linked list', () => {
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.length).toEqual(2);
  });
  it('will return true when finding a value within the linked list that exists', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(77)).toBeTruthy();
  });
  it('will return false when searching for a value in the linked list that does not exist', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.includes(4)).toBeFalsy();
  });
  it('can return a collection of all the values that exist in the linked list', () => {
    linkedList.insert(3);
    linkedList.insert(77);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.toString()).toEqual('1->2->77->3');
  });
  it('can append a value to the end of the list', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.append(4);
    expect(linkedList.toString()).toEqual('1->2->3->4');
  });
  it('can append multiple values to the end of the list', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.append(4);
    linkedList.append(5);
    expect(linkedList.toString()).toEqual('1->2->3->4->5');
  });
  it('can insert a value prior to specified value', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insertBefore(3, 4);
    expect(linkedList.toString()).toEqual('1->2->4->3');
  });
  it('can insert a value after to specified value', () => {
    linkedList.insert(4);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.insertAfter(2, 3);
    expect(linkedList.toString()).toEqual('1->2->3->4');
  });
  it('can delete a node with the specified value', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    linkedList.delete(3);
    expect(linkedList.toString()).toEqual('1->2');
  });
});

describe('Finding K positions from end of Linked List', () => {
  it('throws an error when k is greater than list length', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => linkedList.kthFromEnd(4)).toThrow();
  });
  it('thows an error when k is equal to the list length', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => linkedList.kthFromEnd(3)).toThrow();
  });
  it('thows an error when k is a negative integer', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(() => linkedList.kthFromEnd(-3)).toThrow();
  });
  it('returns node when list length is 1 and k greater than 0', () => {
    linkedList.insert(1);
    expect(() => linkedList.kthFromEnd(99)).toThrow();
  });
  it('returns node when list length is 1 and k is  0', () => {
    linkedList.insert(1);
    expect(linkedList.kthFromEnd(0)).toEqual(1);
  });
  it('returns node in middle of the list', () => {
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(1);
    expect(linkedList.kthFromEnd(1)).toEqual(2);
  });


}); //end of describe
