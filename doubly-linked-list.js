// node
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// doubly linked list

class DoubleyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // new node
    let newNode = new Node(val);
    // check if list is empty, just add it
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    let bNode = this.tail;
    bNode.next = newNode;
    newNode.prev = bNode;

    tail = newNode;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    let oldTail = this.tail;
    this.tail = oldTail.prev;

    this.tail.next = null;
    oldTail.prev = null;

    this.length++;

    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      let oldhead = this.head;

      this.head = null;
      this.tail = null;
      this.length--;

      return oldhead;
    }

    let oldHead = this.head;

    this.head = oldHead.next;
    oldHead.next = null;
    this.head.prev = null;

    this.length--;

    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) return this.push(newNode);

    let oldHead = this.head;

    oldHead.prev = newNode;
    newNode.next = oldHead;
    this.head = newNode;
    length++;

    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;

    if (idx <= this.length / 2) {
      let currNode = this.head;
      let counter = 0;
      while (counter !== idx) {
        currNode = currNode.next;
        counter++;
      }
      return currNode;
    } else {
      let currNode = this.tail;
      let counter = this.length - 1;
      while (idx !== counter) {
        currNode = currNode.prev;
        counter--;
      }
      return currNode;
    }
  }

  set(idx, val) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx == 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);

    let prevNode = this.get(idx - 1);

    let nextNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;

    nextNode.prev = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length) return this.pop();

    let prevNode = this.get(idx - 1);
    let nextNode = prevNode.next.next;
    let removedNode = prevNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
}
