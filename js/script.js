console.log("Witam wszystkich!")

let button = document.querySelector(".button");
let body = document.querySelector(".containerMain");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
})