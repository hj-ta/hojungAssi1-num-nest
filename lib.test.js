const { test, expect } = require("@jest/globals");
const lib = require("./lib");

test("avg([3, 5, 7]) should be 5", () => {
  expect(lib.avg([3, 5, 7])).toBe(5);
});

test("prime(5) should be true", () => {
  expect(lib.prime(5)).toBe(true);
});

test("factorial(5) should be 120", () => {
  expect(lib.factorial(5)).toBe(120);
});