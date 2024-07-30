
const AButton = document.getElementById("apartado-a");
const Bbutton = document.getElementById("apartado-b");

if (AButton !== null && AButton !== undefined && AButton instanceof HTMLButtonElement) {
  AButton.addEventListener("click", () => {
    window.location.href = "http://localhost:5173/src/Apartado-A/index.html";
  });
};

if (Bbutton !== null && Bbutton !== undefined && Bbutton instanceof HTMLButtonElement) {
  Bbutton.addEventListener("click", () => {
    window.location.href = "http://localhost:5173/src/Apartado-B/index.html";
  });
};
