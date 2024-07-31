import { regexIban, validatedIban, extractCodesIban} from "./iban-motor";
import { createNewDiv, readInput } from "../variables-globales-ui";

const createNewParagraph = (text: string): HTMLParagraphElement => {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  return paragraph;
};

const printInfoIban = (): void => {
  const inputDiv = document.getElementById("input-div-iban");
  const resetDiv = document.getElementById("remove-div");
  const inputText = readInput();
  const div = createNewDiv();

  const isIbanFormed = regexIban(inputText);
  const isIbanValid = validatedIban(inputText);
  const codesIban = extractCodesIban(inputText);

  if (resetDiv && resetDiv instanceof HTMLDivElement && inputDiv && inputDiv instanceof HTMLDivElement) {
    inputDiv.removeChild(resetDiv);
  };

  if (!isIbanFormed) {
    alert("IBAN mal formado");
    throw new Error("El IBAN está mal formado");
  };

  if (!isIbanValid) {
    alert("IBAN no válido");
    throw new Error("IBAN no válido");
  };

  if (!codesIban) {
    throw new Error("El extractor del iban ha fallado");
  };
  
  if (inputDiv && inputDiv instanceof HTMLDivElement) {
    div.appendChild(createNewParagraph("El IBAN está bien formado."));
    div.appendChild(createNewParagraph("El IBAN es válido."));
    div.appendChild(createNewParagraph(`Banco: ${codesIban.bankName}`));
    div.appendChild(createNewParagraph(`Código sucursal: ${codesIban.codigoSucursal}`));
    div.appendChild(createNewParagraph(`Dígito de control: ${codesIban.digitoControl}`));
    div.appendChild(createNewParagraph(`Número de Cuenta: ${codesIban.numeroCuenta}`));
    inputDiv.appendChild(div);
  };
};

const searchButton = document.getElementById("iban-search");
if (searchButton && searchButton instanceof HTMLSpanElement) {
  searchButton.addEventListener("click", printInfoIban);
};
