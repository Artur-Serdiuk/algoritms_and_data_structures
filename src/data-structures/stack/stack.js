class Node {
  constructor(val, prev) {
    this.val = val;
    this.prev = prev;
  }
}

export default class Stack {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  print() {
    const res = [];
    let cur = this.tail;
    while (cur) {
      res.push(cur.val);
      cur = cur.prev;
    }

    return res.join(",");
  }

  peek() {
    if (!this.tail) return null;

    return this.tail.val;
  }

  push(val) {
    const node = new Node(val, null);
    this.size++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.prev = this.tail;
    this.tail = node;
  }

  pop() {
    if (!this.tail) return null;

    this.size--;

    const t = this.tail;

    this.tail = t.prev;

    if (!this.tail) {
      this.head = null;
    }

    return t.val;
  }
}
