import { regexCheck } from "./extraer-imagen-motor";

describe("regexCheck", () => {
  test.each([
    [`<img src="http://localhost:3000/./bestiajez.webp"/>`, true],
    [`<div class="card"><img src="http://localhost:3000/./bestiajez.webp"/><div class="container-description">`, true],
    ["<p><span>Habilidades: </span>Fuerza, Resistencia, Agilidad</p>", false],
    [`<src="http://localhost:3000/./bestiajez.webp"/>`, false],
    [`<img "http://localhost:3000/./bestiajez.webp"/>`, false],
  ])(
  "Deberia devolver para el elemento imagen %s el valor %s", (valor: string, expected: boolean) => {
    expect(regexCheck(valor)).toBe(expected);
    }
  );
});