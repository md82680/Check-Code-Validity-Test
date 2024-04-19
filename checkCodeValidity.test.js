const { checkCodeValidity } = require("./checkCodeValidity");

describe("checkCodeValidity function", () => {
  test("should return 'Coupon found!' when entered code matches available code", () => {
    const result = checkCodeValidity("CODE123", [
      "CODE123",
      "CODE456",
      "CODE789",
    ]);
    expect(result.resultString).toBe("Coupon found!");
  });

  test("should return 'Coupon not found' when entered code does not match any available code", () => {
    const result = checkCodeValidity("INVALIDCODE", [
      "CODE123",
      "CODE456",
      "CODE789",
    ]);
    expect(result.resultString).toBe("Coupon not found");
  });

});
