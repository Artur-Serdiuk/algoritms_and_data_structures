import binarySearch from "./binary-search.js";

describe("Binary Search", () => {
  test("should find element in sorted array", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15];
    expect(binarySearch(arr, 7)).toBe(3);
    expect(binarySearch(arr, 15)).toBe(7);
    expect(binarySearch(arr, 1)).toBe(0);
  });

  test("should return -1 for element not in array", () => {
    const arr = [1, 3, 5, 7, 9, 11, 13, 15];
    expect(binarySearch(arr, 4)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
    expect(binarySearch(arr, 16)).toBe(-1);
  });

  test("should handle empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  test("should handle array with single element", () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  test("should handle array with duplicate elements", () => {
    const arr = [1, 2, 2, 2, 3, 4, 5];
    const index = binarySearch(arr, 2);
    expect(index).toBeGreaterThanOrEqual(1);
    expect(index).toBeLessThanOrEqual(3);
  });
});
