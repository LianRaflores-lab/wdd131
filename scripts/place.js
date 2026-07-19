const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

const temperature = 31;
const windSpeed = 10;

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed)
    document.getElementById("windChill").textContent = windChill.tofixeed(1) + "°C";
}

else {
    document.getElementById("windchill").textContent = "N/A";
}