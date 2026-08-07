const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

document.getElementById("join").addEventListener("click", () => {
    window.location.href = "membership.html";
});

document.getElementById("learn-more").addEventListener("click", () => {
    window.location.href = "about.html";
});

document.getElementById("courts").addEventListener("click", () => {
    window.location.href = "courts.html";
});

document.getElementById("membership").addEventListener("click", () => {
    window.location.href = "membership.html";
});