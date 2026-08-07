const confirmationDetails =
    document.querySelector("#confirmation-details");

const savedData = localStorage.getItem("membershipData");

if (savedData && confirmationDetails) {

    const data = JSON.parse(savedData);

    confirmationDetails.innerHTML = `
        <div class="confirmation-card">
            <h2>Thank you, ${data.firstName} ${data.lastName}!</h2>

            <h3>Player Information</h3>

            <p><strong>First Name:</strong> ${data.firstName}</p>
            <p><strong>Last Name:</strong> ${data.lastName}</p>
            <p><strong>Contact Number:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Birthdate:</strong> ${data.birthdate}</p>
            <p><strong>Home Address:</strong> ${data.address}</p>

            <h3>Pickleball Information</h3>

            <p><strong>Playing Experience:</strong> ${data.rating}</p>
            <p><strong>How Often:</strong> ${data.often}</p>

            <h3>Emergency Contact</h3>

            <p><strong>Name:</strong> ${data["contact-name"]}</p>
            <p><strong>Phone:</strong> ${data["contact-phone"]}</p>
            <p><strong>Relationship:</strong> ${data.relationship}</p>
        </div>
    `;
}