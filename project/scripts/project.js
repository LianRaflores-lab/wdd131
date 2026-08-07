const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector(".header-navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});