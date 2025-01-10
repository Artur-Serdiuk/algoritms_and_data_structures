import Stack from "./stack.js";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should create empty stack", () => {
    expect(stack.size).toBe(0);
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
  });

  test("should push elements", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size).toBe(2);
    expect(stack.head.val).toBe(1);
    expect(stack.tail.val).toBe(2);
  });

  test("should pop elements", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.size).toBe(1);
    expect(stack.head.val).toBe(1);
    expect(stack.tail.val).toBe(1);
  });

  test("should peek element", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size).toBe(2);
    expect(stack.head.val).toBe(1);
    expect(stack.tail.val).toBe(2);
  });

  test("should handle pop on empty stack", () => {
    expect(stack.pop()).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
  });

  test("should handle peek on empty stack", () => {
    expect(stack.peek()).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
  });

  test("should print empty stack", () => {
    expect(stack.print()).toBe("");
    expect(stack.size).toBe(0);
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
  });

  test("should print stack with single element", () => {
    stack.push(1);
    expect(stack.print()).toBe("1");
    expect(stack.size).toBe(1);
    expect(stack.head.val).toBe(1);
    expect(stack.tail.val).toBe(1);
  });

  test("should print stack with multiple elements", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe("3,2,1");
    expect(stack.size).toBe(3);
  });

  test("should maintain LIFO order when pushing and popping", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBeNull();
    expect(stack.size).toBe(0);
    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
  });

  test("should handle push after pop", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);

    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.size).toBe(2);
    expect(stack.head.val).toBe(1);
    expect(stack.tail.val).toBe(3);
  });

  test("should reset head and tail after popping last element", () => {
    stack.push(1);
    stack.pop();

    expect(stack.head).toBeNull();
    expect(stack.tail).toBeNull();
    expect(stack.size).toBe(0);
  });
});
