
export const createNewDiv = (): HTMLDivElement => {
  const div = document.createElement("div");
  div.classList.add("info");
  div.id = "remove-div";
  return div;
};

export const readInput = (): string => {
  const input = document.getElementById("input");
  if (input && input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement) {
  const text = input.value;
  input.value = "";
  return text.toUpperCase();
  } else {
    throw new Error("Ha ocurrido un error");
  };
};