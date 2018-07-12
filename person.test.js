const Person = require('./person.js');

test("1985 should be millenial", () => {
    // arrange
    let personObj = new Person(1985);
    // act
    let result = personObj.isMillennial();
    // assert
    expect(result).toBeTruthy();
});

test("1920 should be retiree", () => {
    // arrange
    let personObj = new Person(1920);
    // act
    let result = personObj.isRetiree();
    // assert
    expect(result).toBeTruthy();
});
