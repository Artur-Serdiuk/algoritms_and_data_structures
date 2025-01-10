class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }

  peek() {
    if (!this.head) return null;

    return this.head.val;
  }

  enqueue(val) {
    const node = new Node(val, null);
    this.size++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }

  dequeue() {
    if (!this.head) return null;
    this.size--;

    const h = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return h.val;
  }

  print() {
    const res = [];
    let cur = this.head;
    while (cur) {
      res.push(cur.val);
      cur = cur.next;
    }

    return res.join(",");
  }
}
