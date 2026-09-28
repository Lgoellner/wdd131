document.querySelector("#anoatual").textContent = new Date().getFullYear();

document.querySelector("#ultimaModificacao").textContent =
    `Última Modificação: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Fechar menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Abrir menu");
    }
});