import { describe, it, assert } from "vitest";
import { stackTrace } from "../src/error";

const functionOne = (
  boolOne?: boolean,
  boolTwo?: boolean,
  boolThree?: boolean
) => stackTrace(boolOne, boolTwo, boolThree);
const functionTwo = (
  boolOne?: boolean,
  boolTwo?: boolean,
  boolThree?: boolean
) => functionOne(boolOne, boolTwo, boolThree);

// The two tests marked with concurrent will be run in parallel
describe("Run stackTrace", () => {
  it("serial test", () => {
    assert.deepEqual(
      functionTwo().slice(0, 2),
      ["functionOne", "functionTwo"],
      "StackTrace returns Functions it is called from"
    );
  });
});
