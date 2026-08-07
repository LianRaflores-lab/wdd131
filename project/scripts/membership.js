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

const form = document.querySelector("#membership-form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const submission = {};

        formData.forEach((value, key) => {
            submission[key] = value;
        });

        localStorage.setItem(
            "membershipData",
            JSON.stringify(submission)
        );

        window.location.href = "confirmation.html";
    });
}

const confirmationDetails =
    document.querySelector("#confirmation-details");

const savedData = localStorage.getItem("membershipData");

if (savedData) {

    const data = JSON.parse(savedData);

    confirmationDetails.innerHTML = `
        <h2>Thank you for joining! ${data.firstName}!</h2>

        <h3>Your Membership Information</h3>

        <p><strong>First Name:</strong> ${data.firstName}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p>Your membership request has been received.</p>
    `;
}