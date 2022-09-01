// singly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node("val");
    if (head == null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    return this;
  }

  // traverse() {
  //   let current = this.head;

  //   while(current.next){
  //     console.log(current.val)
  //     current = current.next
  //   }
  // }

  pop() {
    let current = this.head;
    let prev = null;

    if (!this.head) {
      return undefined;
    } else if (!this.current.next) {
      this.head = null;
      this.tail = null;
      length = 1;
      return this.current.val;
    } else {
      while (this.current.next) {
        prev = current;
        current = current.next;
      }
      this.tail = prev;
      this.length = this.length - 1;

      return this.current.next;
    }
  }

  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
      return this;
    } else {
      let oldHead = this.head;

      this.head = newNode;
      this.head.next = oldHead;
      this.length++;
      return this;
    }
  }

  get(num) {
    if (num < 0 || num >= this.length) return false;

    let idx = 0;
    let current = this.head;
    while (idx !== num) {
      current = current.next;
      idx++;
    }

    return current;
  }

  set(num, val) {
    let node = this.get(num);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(num, val) {
    if (num < 0 || num >= this.length) return false;
    if (num === this.length) return !!this.push(val);
    if (num === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(num - 1);
    let newNext = prevNode.next;

    prevNode.next = newNode;
    newNode.next = newNext;

    this.length++;

    return true;
  }

  remove(num) {
    if (num < 0 || num > this.length) return undefined;
    if (num === 0 && this.length === 1) return this.pop();
    if (num === 0) return this.shift();
    if (num === this.length - 1) return this.pop();

    let prevNode = this.get(num - 1);
    let removed = prevNode.next;
    let nextNode = this.get(num + 1);
    prevNode.next = nextNode;

    this.length--;

    return removed;
  }

  print() {
    node = this.head;
    arr = [];

    while (node) {
      arr.push();
      node = node.next;
    }

    console.log(arr);
    return this;
  }

  reverse() {
    // error checkin

    let node = this.head;
    head = this.tail;
    tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;

      node.next = prev;
      prev = node;
      node = next;
    }
  }
}
