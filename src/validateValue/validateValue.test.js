const validateValue = require("./validateValue");

describe("validateValue", () => {
    test("Коректное значения", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("Некоректное значения", () => {
        expect(validateValue(-1)).toBe(false);
        expect(validateValue(101)).toBe(false);
    });
});