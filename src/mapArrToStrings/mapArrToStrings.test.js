const mapArrToStrings = require("./mapArrToStrings");

describe("mapArrToStrings", () => {
    test("Коректное значения", () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
    });
    test("Некоректное значения", () => {
        expect(mapArrToStrings([1, "2", 3])).toEqual(["1", "2", "3"]);
    });
    test("Пустой массив", () => {
        expect(mapArrToStrings([])).toEqual([]);
    });

});