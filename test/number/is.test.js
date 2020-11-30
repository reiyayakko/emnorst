
const {
    isNumber,
    isEven,
    isOdd,
    isInteger,
    isInfinity,
    isPositive,
    isNegative,
    isPrime,
    uptrend,
    downtrend,
} = require("../../dist/emnorst.cjs.js");

describe("is/number", () => {
    /** @test {isNumber} */
    test("isNumber", ()=>{
        expect(isNumber(123.456)).toBeTruthy();
        expect(isNumber(new Number)).toBeTruthy();
        expect(isNumber(NaN)).toBeFalsy();
        expect(isNumber(new Number(NaN))).toBeFalsy();
        expect(isNumber("1")).toBeFalsy();
    });
    /** @test {isEven} */
    test("isEven", () => {
        expect(isEven(0)).toBeTruthy();
        expect(isEven(1)).toBeFalsy();
    });
    /** @test {isOdd} */
    test("isOdd", () => {
        expect(isOdd(1)).toBeTruthy();
        expect(isOdd(0)).toBeFalsy();
    });
    /** @test {isInteger} */
    test("isInteger", ()=>{
        expect(isInteger(1)).toBeTruthy();
        expect(isInteger(1.5)).toBeFalsy();
        expect(isInteger("1")).toBeFalsy();
    });
    /** @test {isInfinity} */
    test("isInfinity", () => {
        expect(isInfinity(Infinity)).toBeTruthy();
        expect(isInfinity(-Infinity)).toBeTruthy();
        expect(isInfinity(99999999)).toBeFalsy();
        expect(isInfinity("")).toBeFalsy();
    });
    /** @test {isPositive} */
    test("isPositive", () => {
        expect(isPositive(10)).toBeTruthy();
        expect(isPositive(0)).toBeTruthy();
        expect(isPositive(-0)).toBeFalsy();
        expect(isPositive(-10)).toBeFalsy();
        expect(isPositive("")).toBeFalsy();
    });
    /** @test {isNegative} */
    test("isNegative", () => {
        expect(isNegative(10)).toBeFalsy();
        expect(isNegative(0)).toBeFalsy();
        expect(isNegative(-0)).toBeTruthy();
        expect(isNegative(-10)).toBeTruthy();
        expect(isNegative("")).toBeFalsy();
    });
    /** @test {isPrime} */
    test("isPrime", () => {
        expect(isPrime(2)).toBeTruthy();
        expect(isPrime(1697)).toBeTruthy();
        expect(isPrime(256)).toBeFalsy();
        expect(isPrime(123456789)).toBeFalsy();
        expect(isPrime(NaN)).toBeFalsy();
        expect(isPrime(-100)).toBeFalsy();
        expect(isPrime("")).toBeFalsy();
    });
    test("trend", () => {
        expect(uptrend(1, 2, 2, 3)).toBeTruthy();
        expect(downtrend(3, 2, 2, 1)).toBeTruthy();
    });
});
