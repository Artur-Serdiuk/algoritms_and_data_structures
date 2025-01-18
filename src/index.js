import solver from "./recursion/recursion-maze.js";

const maze = [
  "xxxxxxxxxx x",
  "x        x x",
  "x        x x",
  "x xxxxxxxx x",
  "x          x",
  "x xxxxxxxxxx",
];

solver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 });
