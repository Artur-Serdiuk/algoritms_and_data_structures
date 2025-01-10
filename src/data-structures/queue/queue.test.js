import Queue from "./queue.js";

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should create empty queue", () => {
    expect(queue.size).toBe(0);
  });

  test("should enqueue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size).toBe(2);
  });

  test("should dequeue elements", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size).toBe(1);
  });

  test("should peek element", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toBe(1);
    expect(queue.size).toBe(2);
  });
});
