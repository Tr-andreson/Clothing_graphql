import { Sum } from ".";
import { describe, expect, it, vi } from "vitest";

describe("SUM", () => {
  it("Unit Test ", () => {
    const response = Sum(2, 5)
    expect(response).toBe(7)
  })

  it("Mock Test", () => {
    const fakeAdd = vi.fn().mockImplementation(Sum)
    expect(fakeAdd(2, 3)).toBe(5)
    expect(fakeAdd).toHaveBeenCalledWith(2, 3)

  })
})
