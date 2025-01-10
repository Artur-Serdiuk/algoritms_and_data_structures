import bubbleSort from "./bubble-sort.js";

describe("Bubble Sort", () => {
  test("should sort array", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    const sorted = bubbleSort([...arr]);
    expect(sorted).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test("should sort array with duplicates", () => {
    const arr = [5, 2, 8, 5, 1, 9, 2, 8];
    const sorted = bubbleSort([...arr]);
    expect(sorted).toEqual([1, 2, 2, 5, 5, 8, 8, 9]);
  });

  test("should handle empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });
});
