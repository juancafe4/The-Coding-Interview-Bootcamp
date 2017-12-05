// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  } 
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;

    while (node.next) { 
      node = node.next;
    }

    return node;
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = prev.next;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    let node = this.getLast();
    if (node) {
      node.next = new Node(data);
    } else {
      this.head = new Node(data);
    }

  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head || index === 0) {
      this.head = new Node(data, this.head);
    } else {
      let prev = this.getAt(index - 1) || this.getLast();
      let node = new Node(data, prev.next);
      prev.next = node;
    }
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

let l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);

console.log(l.head) ;
module.exports = { Node, LinkedList };
