const maxProdSubArray = require("../src/maxProdSubArray");

describe("maxProdSubArray", () => {
  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, 3])).toEqual(3);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, -3])).toEqual(1);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, 3, 5])).toEqual(15);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, -3, 5])).toEqual(5);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, -3, 5, 7])).toEqual(35);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([1, -3, 5, 7, -2])).toEqual(210);
  });

  it("returns the maximum product of a subarray", () => {
    expect(maxProdSubArray([-4, -3, -2])).toEqual(12);
  });
});
