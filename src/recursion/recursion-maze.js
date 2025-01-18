const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function walk(maze, wall, cur, end, seen, path) {
  if (
    cur.x < 0 ||
    cur.x >= maze[0].length ||
    cur.y < 0 ||
    cur.y >= maze.length
  ) {
    return false;
  }

  if (maze[cur.y][cur.x] === wall) return false;

  if (cur.x == end.x && cur.y == end.y) {
    path.push(end);
    return true;
  }

  if (seen[cur.y][cur.x]) return false;

  seen[cur.y][cur.x] = true;

  path.push(cur);

  for (let i = 0; i < dir.length; i++) {
    let [x, y] = dir[i];

    const canWalk = walk(
      maze,
      wall,
      { x: cur.x + x, y: cur.y + y },
      end,
      seen,
      path
    );

    if (canWalk) return true;
  }

  path.pop();

  return false;
}

export default function solver(maze, wall, start, end) {
  const seen = [];
  const path = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
