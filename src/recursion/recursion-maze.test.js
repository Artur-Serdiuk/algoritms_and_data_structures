import solver from "./recursion-maze.js";

describe("Recursion maze", () => {
  test("Path is correct", () => {
    const maze = [
      "xxxxxxxxxx x",
      "x        x x",
      "x        x x",
      "x xxxxxxxx x",
      "x          x",
      "x xxxxxxxxxx",
    ];
    const startPoint = { x: 10, y: 0 };
    const endPoint = { x: 1, y: 5 };
    const path = solver(maze, "x", startPoint, endPoint);

    expect(path).toStrictEqual([
      { x: 10, y: 0 },
      { x: 10, y: 1 },
      { x: 10, y: 2 },
      { x: 10, y: 3 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 6, y: 4 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ]);
  });
});
