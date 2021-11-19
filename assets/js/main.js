const btnMenu = document.getElementById("btn-menu");
const navMenu =  document.getElementById("nav-menu");
const btnUp = document.getElementById("btn-up");
const btnTheme = document.getElementById("btn-theme");
const htmlTag = document.getElementsByTagName("html")[0];

// Nav active (Mobile)
btnMenu.addEventListener("click", () => navMenu.classList.toggle("nav-active"));

// Button up
btnUp.addEventListener("click", () => scrollTo(0, 0));

// Website theme
btnTheme.addEventListener("click", () => {
    if (btnTheme.getAttribute("dark-mode") === "false") {
        btnTheme.setAttribute("src", "./static/icons/website-theme/dark-theme.svg");
        btnTheme.setAttribute("dark-mode", "true");
        htmlTag.classList.add("dark-mode");
    } else {
        btnTheme.setAttribute("src", "./static/icons/website-theme/light-theme.svg");
        btnTheme.setAttribute("dark-mode", "false");
        htmlTag.classList.remove("dark-mode");
    }
});