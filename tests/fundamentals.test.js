const { describe, it } = require("node:test");
const assert = require("node:assert");

describe("JavaScript Fundamentals", () => {
  it("should correctly compare with strict equality", () => {
    assert.strictEqual(5 === 5, true);
    assert.strictEqual("5" === 5, false);
  });

  it("should handle type conversions", () => {
    assert.strictEqual(Number("456"), 456);
    assert.strictEqual(String(456), "456");
  });

  it("should identify truthy and falsy values", () => {
    assert.strictEqual(Boolean(0), false);
    assert.strictEqual(Boolean(""), false);
    assert.strictEqual(Boolean(null), false);
    assert.strictEqual(Boolean(undefined), false);
    assert.strictEqual(Boolean(1), true);
    assert.strictEqual(Boolean("text"), true);
  });

  it("should handle dynamic typing", () => {
    let x = 42;
    assert.strictEqual(typeof x, "number");
    x = "hello";
    assert.strictEqual(typeof x, "string");
  });
});
