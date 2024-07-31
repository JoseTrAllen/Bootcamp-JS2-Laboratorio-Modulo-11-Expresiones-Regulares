import { regexCheck, extractImg } from "./extraer-imagen-motor";
import { createNewDiv, readInput } from "../variables-globales-ui";

const createLink = (link: string): HTMLAnchorElement => {
  const newLink = document.createElement("a");
  newLink.setAttribute("href", link);
  newLink.setAttribute("target", "_blank");
  newLink.innerText = link;
  return newLink;
};

const createImg = (link: string): HTMLImageElement => {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", link);
  return newImg;
};

const printImage = (): void => {
  const divAppenchild = document.getElementById("container");
  const resetDiv = document.getElementById("remove-div");
  const newDiv = createNewDiv();
  const textTextArea = readInput().toLowerCase();
  const extract = extractImg(textTextArea);

  if (resetDiv && resetDiv instanceof HTMLDivElement && divAppenchild && divAppenchild instanceof HTMLDivElement) {
    divAppenchild.removeChild(resetDiv);
  };
  const isValid = regexCheck(textTextArea.toLowerCase());
  if(isValid && extract !== null && divAppenchild) {
    divAppenchild.appendChild(newDiv);

    extract.forEach(image => {
    const divImgAnchor = document.createElement("div");
    divImgAnchor.classList.add("img-container");
    newDiv.appendChild(divImgAnchor);
    divImgAnchor.appendChild(createLink(image));
    divImgAnchor.appendChild(createImg(image));
  });
} else {
  alert("Formato no válido")
    throw new Error("Formato inválido");
  };
};

const button = document.getElementById("button");
if (button && button instanceof HTMLButtonElement) {
  button.addEventListener("click", () => {
    printImage()
  })
}