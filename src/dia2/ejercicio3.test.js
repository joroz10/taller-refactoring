const isOddNumber = (num) => {
  return num % 2 === 0;
};

//Añade los test
describe("isOddNumber", () => {
  it("should return true when is odd number", () => {
    const numPar = 2
    
    const result = isOddNumber(numPar);
    
    expect(result).toBeTruthy()
  });
  it("should return false when is even number", () => {
    const numImpar = 1
    
    const result = isOddNumber(numImpar);
    
    expect(result).toBeFalsy()
  });
});