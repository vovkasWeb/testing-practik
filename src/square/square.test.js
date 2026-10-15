const square = require("./square");


describe("square", () => {
    let mockValue;
    beforeEach(() => {
       mockValue = Math.floor(Math.random() * 100);
    });
    beforeAll(() => {
        console.log("beforeAll");
    })
    test("Коректное значения", () => {
        expect(square(5)).toBe(25);
        expect(square(0)).toBe(0);
    });
    test("Некоректное значения", () => {
        expect(square(-5)).not.toBe(25);
    })
    test("Некоректное значения", () => {
        expect(square(101)).toBe(null);
    });


    // afterAll(() => {
    //     console.log("afterAll");
    // })
    // afrerEach(() => {
    //     console.log("afterEach");
    // })
});