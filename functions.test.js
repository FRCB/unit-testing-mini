// for testing, important to call the file "....test.js"

const functions = require('./functions');

test("returnTwo() should return 2.", () => {
    let result = functions.returnTwo();
    expect(result).toEqual(2) // could use toBe instead if toEqual
});

// run 'npm run test'

test("greeting() should return correct string.", () => {
    let str = functions.greeting("France")
    expect(str).toEqual("Hello, France.")
});

// run 'npm run test'

test("add(1, 2) should sum 2 number parameters.", () => {
    expect(functions.add(1, 2)).toEqual(3)
});

test("add(2, 2) should sum 2 of the number parameters.", () => {
    expect(functions.add(2, 2)).toEqual(4)
});

// run 'npm run test'

describe("Math tests", () => {
    test("multiply(2, 2) should multiplication of the 2 number parameters.", () => {
        expect(functions.multiply(2, 2)).toEqual(4)
    });

    test("subtract(2, 2) should subtraction of the 2 number parameters.", () => {
        expect(functions.subtract(2, 2)).toEqual(0)
    });
});

// run 'npm run test'

// keywords = only & skip
