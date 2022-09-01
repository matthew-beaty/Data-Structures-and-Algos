// BFS

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currNode = this.root;

    while (true) {
      if (currNode.val === val) return undefined;
      if (currNode.val > val) {
        if (!currNode.left) {
          currNode.left = newNode;
          return this;
        }

        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return this;
        }

        currNode = currNode.right;
      }
    }
  }

  contains(val) {
    let currNode = this.root;

    while (true) {
      if (!currNode) return false;
      if (currNode.val === val) return true;
      currNode = currNode.val > val ? currNode.left : currNode.right;
    }
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  add(newNode) {
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let oldLast = this.last;
      oldLast.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return true;
  }

  remove() {
    if (this.size === 0) return undefined;
    if (this.size === 1) {
      let removedNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;

      return removedNode;
    }

    let newFirst = this.first.next;
    let oldFirst = this.first;
    this.first = newFirst;
    this.size--;

    return oldFirst;
  }
}

let bst = new BST();
bst.insert(10);
// console.log(bst);
bst.insert(11);
// console.log(bst);
bst.insert(17);
// console.log(bst);
bst.insert(7);
// console.log(bst);
// console.log(bst.contains(7));
// console.log(bst.contains(100));
// console.log(bst);

function listNodesDFS(tree) {
  let data = [];

  function traverse(node) {
    data.push(node.val);

    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }

  traverse(tree.root);

  return data;
}

console.log(bst);
console.log(listNodesDFS(bst));

function listNodesBFS(tree) {
  let q = new Queue();
  let visited = [];

  q.add(tree.root);

  while (q.size > 0) {
    let node = q.remove();
    console.log(node);
    visited.push(node.val);

    if (node.left) {
      q.add(node.left);
    }
    if (node.right) {
      q.add(node.right);
    }
  }

  return visited;
}

// console.log(listNodesBFS(bst));
