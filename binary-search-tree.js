class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
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
      if (currNode.val < val) {
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
      if (currNode === null) return false;
      if (currNode.val === val) return true;
      currNode = currNode.val < val ? currNode.left : currNode.right;
    }
  }
}

// Notes! perf not guarenteed. You can have a bst thats 3 -> 7 -> 9 -> 15-> 18-> 50, etc. so the tree must be built evenly.

// let bst = new BST();
// bst.insert(10);
// console.log(bst)
// bst.insert(11);
// console.log(bst)
// bst.insert(17);
// console.log(bst)
// bst.insert(7);
// console.log(bst)
// console.log(bst.contains(7))
// console.log(bst.contains(100))
// console.log(bst)
