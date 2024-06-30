// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Constants for the calculation
    const power = 0.16;
    const factor = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, power) + 0.3965 * temperature * Math.pow(windSpeed, power);

    // Return the calculated wind chill factor
    return factor.toFixed(1); // Rounding to 1 decimal place
}

// Function to check if wind chill calculation is viable
function canCalculateWindChill(temperature, windSpeed) {
    // Temperature conditions for metric and imperial units
    const isMetric = temperature <= 10;
    const isImperial = temperature <= 50;

    // Wind speed conditions for metric and imperial units
    const isViableMetric = windSpeed > 4.8;
    const isViableImperial = windSpeed > 3;

    // Return true if either metric or imperial conditions are met
    return (isMetric && isViableMetric) || (isImperial && isViableImperial);
}

// Function to initialize wind chill display
function initializeWindChill() {
    // Static values matching displayed content
    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h

    // Check if wind chill calculation is viable
    if (canCalculateWindChill(temperature, windSpeed)) {
        // Calculate wind chill factor
        const windChill = calculateWindChill(temperature, windSpeed);

        // Display wind chill factor
        document.getElementById('windChill').textContent = windChill + '°'; // Displaying with ° symbol
    } else {
        // Display "N/A" if conditions are not met
        document.getElementById('windChill').textContent = 'N/A';
    }
}

// Call initializeWindChill when the page loads
window.addEventListener('load', initializeWindChill);
