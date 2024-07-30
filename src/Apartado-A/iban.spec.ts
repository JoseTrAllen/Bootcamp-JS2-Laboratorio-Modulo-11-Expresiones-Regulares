import {regexIban} from "./iban-motor";

describe("regexIban", () => {
  test.each([
    ["ES21 1465 0100 72 2030876293", true],
    ["ES2114650100722030876293", true],
    ["ES21-1465-0100-72-2030876293", true],
    ["ES6621000418401234567891", true],
    ["ES662100041840123456789", false],
    ["ES66210004184012345678ES", false],
    ["12662100041ES01234567891", false],
  ])(
  "Deberia devolver para el IBAN %s el valor %s", (valor: string, expected: boolean) => {
    expect(regexIban(valor)).toBe(expected);
    }
  );
});
