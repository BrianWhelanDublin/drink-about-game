describe("Drink About Game", () => {
  describe("Drink", () => {
    it("Should alert an error if we dont supply a number", () => {
      spyOn(window, "alert");
      whatCanIDrink("five");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
    it("Should return Sorry. I can’t tell what drink because that age is incorrect!", () => {
      expect(whatCanIDrink(-2)).toBe(
        "Sorry. I can't tell what drink because that age is incorrect!"
      );
    });
    it("Should return Sorry. I can’t tell what drink because that age is incorrect!", () => {
      expect(whatCanIDrink(156)).toBe(
        "Sorry. I can't tell what drink because that age is incorrect!"
      );
    });
    it("Should return Drink Toddy", () => {
      expect(whatCanIDrink(5)).toBe("Drink Toddy");
    });
    it("Should return Drink Coke", () => {
      expect(whatCanIDrink(14)).toBe("Drink Coke");
    });
    it("Should return Drink Coke", () => {
      expect(whatCanIDrink(17)).toBe("Drink Coke");
    });
    it("Should return Drink Beer", () => {
      expect(whatCanIDrink(18)).toBe("Drink Beer");
    });
    it("Should return Drink Beer", () => {
      expect(whatCanIDrink(20)).toBe("Drink Beer");
    });
    it("Should return Drink Whisky", () => {
      expect(whatCanIDrink(21)).toBe("Drink Whisky");
    });
    it("Should return Drink Whisky", () => {
      expect(whatCanIDrink(56)).toBe("Drink Whisky");
    });
  });
});
