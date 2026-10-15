const delay = require("./delay");

describe("delay", () => {
    test("Коректное значения", async() => {
        const sum = await delay(() => 2 + 2, 1000);
        expect(sum).toBe(4);
    });
});