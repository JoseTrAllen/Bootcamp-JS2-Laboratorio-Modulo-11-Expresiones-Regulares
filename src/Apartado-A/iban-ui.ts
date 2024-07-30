import { regexIban, validatedIban} from "./iban-motor";

const searchButton = document.getElementById("iban-search");

const createNewParagraph = (text: string): HTMLParagraphElement => {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  return paragraph;
};

const createNewDiv = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("info-iban");
  div.id = "remove-div";
  return div;
};

const readInput = (): any => {
  const input = document.getElementById("iban-input");
  if (input !== null && input !== undefined && input instanceof HTMLInputElement) {
  const text = input.value;
  input.value = "";
  return text
  };
};

const printInput = () => {
  const inputDiv = document.getElementById("input-div-iban");
  const resetDiv = document.getElementById("remove-div")
  const inputText = readInput();
  const div = createNewDiv();
  const IsIbanFormed = regexIban(inputText);
  const IsIbanValid = validatedIban(inputText)
  
  if (resetDiv && inputDiv) {
    inputDiv.removeChild(resetDiv);
  };

  if (IsIbanFormed && div !== null && div !== undefined && div instanceof HTMLDivElement ) {
    const formedParagraph = createNewParagraph("El IBAN está bien formado.");
    div.appendChild(formedParagraph);
  } else {
    alert("Iban inválido o mal formado");
    throw new Error("El IBAN está mal formado o no es válido");
  };

  if (IsIbanValid && div !== null && div !== undefined && div instanceof HTMLDivElement) {
    const validParagraph = createNewParagraph("El IBAN es válido.")
    div.appendChild(validParagraph);
  };

  if (inputDiv !==  null && inputDiv !== undefined && inputDiv instanceof HTMLDivElement) {
    inputDiv.appendChild(div);
  };
};

if (searchButton !== null && searchButton !== undefined && searchButton instanceof HTMLSpanElement) {
  searchButton.addEventListener("click", () => {
    printInput()
  });
};
