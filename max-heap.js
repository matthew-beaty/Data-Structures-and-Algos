// max heap using an array and math first

class Heap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {}

  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let current = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor(idx - 1 / 2);
      let parent = this.values[parentIdx];

      if (parent >= current) break;

      this.values[parentIdx] = current;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    // COME BACK TO THIS LATER
  }
}
