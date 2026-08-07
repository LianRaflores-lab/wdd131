const often = [
    {
        id: "first",
        name: "First Time"
    },
    {
        id: "once",
        name: "Once a Week"
    },
    {
        id: "2-3",
        name: "2-3 Times a Week"
    },
    {
        id: "4+",
        name: "4+ Times a Week"
    },
]

const oftenSelect = document.querySelector("#often");

often.forEach(regularity => {
    const option = document.createElement("option");

    option.value = regularity.id;
    option.textContent = regularity.name;

    oftenSelect.appendChild(option);
})

const relationship = [
    {
        id: "mom",
        name: "Mother"
    },
    {
        id: "dad",
        name: "Father"
    },
    {
        id: "sib",
        name: "Sibling"
    },
    {
        id: "spouse",
        name: "Spouse"
    },
    {
        id: "child",
        name: "Child"
    },
    {
        id: "other",
        name: "Other"
    },
]

const relationshipSelect = document.querySelector("#relationship");

relationship.forEach(rel => {
    const option = document.createElement("option");

    option.value = rel.id;
    option.textContent = rel.name;

    relationshipSelect.appendChild(option);
})

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;