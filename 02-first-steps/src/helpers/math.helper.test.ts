import { describe, expect, test } from "vitest";
import { add, divide, multiply, subtract } from "./math.helper";

describe("calculator", () => {
  test("add two positives numbers", () => {
    //! 1. Arrqange
    const a = 1;
    const b = 2;
    //! 2. Act
    const res = add(a, b);
    //! 3. Assert

    expect(res).toBe(a + b);
  });

  test("subtract two positives numbers", () => {
    //! 1. Arrqange
    const a = -5;
    const b = -2;
    //! 2. Act
    const res = subtract(a, b);
    //! 3. Assert

    expect(res).toBe(a - b);
  });
  test("multiply two positives numbers", () => {
    //! 1. Arrqange
    const a = 1;
    const b = 2;
    //! 2. Act
    const res = multiply(a, b);
    //! 3. Assert

    expect(res).toBe(a * b);
  });
  test("divide two positives numbers", () => {
    //! 1. Arrqange
    const a = 1;
    const b = 2;
    //! 2. Act
    const res = divide(a, b);
    //! 3. Assert

    expect(res).toBe(a / b);
  });
});
