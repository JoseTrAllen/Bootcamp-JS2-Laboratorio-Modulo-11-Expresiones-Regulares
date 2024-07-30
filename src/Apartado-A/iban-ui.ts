import { regexIban, validatedIban, extractCodesIban} from "./iban-motor";

const createNewDiv = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("info-iban");
  div.id = "remove-div";
  return div;
};

const createNewParagraph = (text: string): HTMLParagraphElement => {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  return paragraph;
};

const readInput = (): string => {
  const input = document.getElementById("iban-input");
  if (input !== null && input !== undefined && input instanceof HTMLInputElement) {
  const text = input.value;
  input.value = "";
  return text.toUpperCase();
  } else {
    throw new Error("Ha ocurrido un error");
  };
};

const printInfoIban = () => {
  const inputDiv = document.getElementById("input-div-iban");
  const resetDiv = document.getElementById("remove-div")
  const inputText = readInput();
  const div = createNewDiv();

  const IsIbanFormed = regexIban(inputText);
  const IsIbanValid = validatedIban(inputText);
  const codesIban = extractCodesIban(inputText);

  if (resetDiv !== null && resetDiv instanceof HTMLDivElement && inputDiv !== null && resetDiv instanceof HTMLDivElement) {
    inputDiv.removeChild(resetDiv);
  };

  if (IsIbanFormed && div !== null && div !== undefined && div instanceof HTMLDivElement ) {
    const formedParagraph = createNewParagraph("El IBAN está bien formado.");
    div.appendChild(formedParagraph);
  } else {
    alert("Iban mal formado");
    throw new Error("El IBAN está mal formado");
  };

  if (IsIbanValid && div !== null && div !== undefined && div instanceof HTMLDivElement) {
    const validParagraph = createNewParagraph("El IBAN es válido.")
    div.appendChild(validParagraph);
  } else {
    alert("El IBAN introducido no es correcto");
    throw new Error("IBAN inválido");
  };

  if (codesIban !== null && codesIban !== undefined) {
    div.appendChild(createNewParagraph(`Banco: ${codesIban.bankName}`));
    div.appendChild(createNewParagraph(`Código sucursal: ${codesIban.codigoSucursal}`));
    div.appendChild(createNewParagraph(`Dígito de control: ${codesIban.digitoControl}`));
    div.appendChild(createNewParagraph(`Número de Cuenta: ${codesIban.numeroCuenta}`));
  } else {
    throw new Error("El extractor del iban ha fallado");
  };

  if (inputDiv !==  null && inputDiv !== undefined && inputDiv instanceof HTMLDivElement) {
    inputDiv.appendChild(div);
  };
};

const searchButton = document.getElementById("iban-search");
if (searchButton !== null && searchButton !== undefined && searchButton instanceof HTMLSpanElement) {
  searchButton.addEventListener("click", () => {
    printInfoIban()
  });
};