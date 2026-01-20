import { expect, test } from "vitest";
import { add } from "./math.helper";

test("should add two positives numbers", () => {
  //! 1. Arrqange
  const a = 1;
  const b = 2;
  //! 2. Act
  const res = add(a, b);
  //! 3. Assert

  expect(res).toBe(a +b);
});
