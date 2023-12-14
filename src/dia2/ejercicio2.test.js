const isPositiveNumber = (num) => {
  if(num >= 0) return true

  return false
};

describe("isPositiveNumber", () => {
  it("should return true when is poistive number", () => {
    const numPositivo = 1
    

    const result = isPositiveNumber(numPositivo);
    

    expect(result).toBeTruthy()
    
  });
  it("should return false when is negative", () => {
    const numNegativo = -5

    const result2 = isPositiveNumber(numNegativo);

    expect(result2).toBeFalsy()
  });
});
