import { Sum } from ".";
import { describe, expect, it } from "vitest";

describe("SUM", () => {
  it("Response should ", () => {
    const response = Sum(2, 5)
    expect(response).toBe(7)
  })

})
