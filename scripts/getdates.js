const currentYear = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = currentYear

document.querySelector(".lastModified").textContent =
    `Last Modified: ${document.lastModified}`;