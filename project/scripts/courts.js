const courts = [
    {
        courtName: "Court 1",
        dedicated: "2005, August, 7",
        area: 500,
        image: "images/court-1.jpg"
    },
    {
        courtName: "Court 2",
        dedicated: "2010, October, 10",
        area: 1000,
        image: "images/court-2.jpg"
    },
    {
        courtName: "Court 3",
        dedicated: "2017, July, 9",
        area: 1067,
        image: "images/court-3.jpg"
    },
    {
        courtName: "Court 4",
        dedicated: "2020, January, 19",
        area: 249,
        image: "images/court-4.jpg"
    },
    {
        courtName: "Court 5",
        dedicated: "2007, May, 1",
        area: 499,
        image: "images/court-5.jpg"
    },
    {
        courtName: "Court 6",
        dedicated: "2023, October, 19",
        area: 1099,
        image: "images/court-6.jpg"
    },
    {
        courtName: "Court 7",
        dedicated: "2009, July, 1",
        area: 700,
        image: "images/court-7.jpg"
    },
    {
        courtName: "Court 8",
        dedicated: "2021, March, 8",
        area: 1020,
        image:"images/court-8.jpg"
    },
]

const container = document.getElementById("court-gallery");

function displayCourts(courtList) {
    container.innerHTML = "";

    courtList.forEach(court => {
        const card = document.createElement("section");

        card.innerHTML = `
                <div class="court">
                <h3>${court.courtName}</h3>
                <p><strong>Dedicated:</strong> ${court.dedicated}</p>
                <p><strong>Area:</strong> ${court.area.toLocaleString()} sq ft</p>
                <img src="${court.image}" alt="${court.courtName}" loading="lazy">
            </div>
        `;

        container.appendChild(card)
    });
}

displayCourts(courts);

document.getElementById("old").addEventListener("click", () => {
    displayCourts(
        courts.filter(court => parseInt(court.dedicated) < 2015)
    );
});

document.getElementById("new").addEventListener("click", () => {
    displayCourts(
        courts.filter(court => parseInt(court.dedicated) > 2015)
    );
});

document.getElementById("large").addEventListener("click", () => {
    displayCourts(
        courts.filter(court => court.area > 1000)
    );
});

document.getElementById("small").addEventListener("click", () => {
    displayCourts(
        courts.filter(court => court.area < 999)
    );
});

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;