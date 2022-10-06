const { sum, nativeNull } = require("./intro")

describe("sum function:", () => {
  test("should return sum of two values", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("should return a value correctly comparing to other", () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
  });

  test("should sum 2 float values correctly", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("native null function:", () => {
  test("should return false value null", () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy(); // null, undefined, 0, ''
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});
