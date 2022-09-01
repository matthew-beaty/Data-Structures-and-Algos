// node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// stack

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let nextNode = this.first;
      this.first = newNode;
      newNode.next = nextNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return null;

    let poppedHead = this.head;

    this.head = poppedHead.next;
    this.length--;

    return poppedHead;
  }
}
