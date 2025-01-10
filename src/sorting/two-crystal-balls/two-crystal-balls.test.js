import twoCrystalBalls from "./two-crystal-balls.js";

describe("Two Crystal Balls", () => {
  test("should find breaking point", () => {
    const breaks = new Array(10).fill(false);
    breaks[7] = true;
    breaks[8] = true;
    breaks[9] = true;
    expect(twoCrystalBalls(breaks)).toBe(7);
  });

  test("should return -1 when no breaking point", () => {
    const breaks = new Array(10).fill(false);
    expect(twoCrystalBalls(breaks)).toBe(-1);
  });

  test("should handle all breaking points", () => {
    const breaks = new Array(10).fill(true);
    expect(twoCrystalBalls(breaks)).toBe(0);
  });
});
