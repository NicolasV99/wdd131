const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Bogotá Colombia Temple",
      location: "Bogotá, Colombia",
      dedicated: "1999, April, 24",
      area: 53500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-29866.jpg"  
    },
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019, March, 10-12",
      area: 41010,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
    },
    {
      templeName: "Bern Switzerland Temple",
      location: "Bern, Switzerland",
      dedicated: "1955, September, 11-15",
      area: 35546,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-3076.jpg"  
    }
    // Add more temple objects here...
  ];

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;


/***************************************************************************/

// Define the temples array (already provided in your code)

// Function to create temple card
function createTempleCard(temple) {
    // Create figure element
    const figure = document.createElement('figure');

    // Create image element
    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName; // Provide a descriptive alt text
    image.loading = 'lazy'; // Use native lazy loading

    // Create figcaption element for temple details
    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
    `;

    // Append image and figcaption to figure element
    figure.appendChild(image);
    figure.appendChild(figcaption);

    return figure;
}

// Function to display all temples
function displayAllTemples() {
    const figureContainer = document.querySelector('.figure-container');
    figureContainer.innerHTML = ''; // Clear existing content

    temples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        figureContainer.appendChild(templeCard);
    });
}

// Function to filter temples built before 1900
function filterOldTemples() {
    const filteredTemples = temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear < 1900;
    });
    displayFilteredTemples(filteredTemples);
}

// Function to filter temples built after 2000
function filterNewTemples() {
    const filteredTemples = temples.filter(temple => {
        const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
        return dedicatedYear > 2000;
    });
    displayFilteredTemples(filteredTemples);
}

// Function to filter temples larger than 90000 sqft
function filterLargeTemples() {
    const filteredTemples = temples.filter(temple => temple.area > 90000);
    displayFilteredTemples(filteredTemples);
}

// Function to filter temples smaller than 10000 sqft
function filterSmallTemples() {
    const filteredTemples = temples.filter(temple => temple.area < 10000);
    displayFilteredTemples(filteredTemples);
}

// Function to display filtered temples
function displayFilteredTemples(filteredTemples) {
    const figureContainer = document.querySelector('.figure-container');
    figureContainer.innerHTML = ''; // Clear existing content

    filteredTemples.forEach(temple => {
        const templeCard = createTempleCard(temple);
        figureContainer.appendChild(templeCard);
    });
}

// Event listener for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const linkText = event.target.textContent.toLowerCase();
        switch (linkText) {
            case 'old':
                filterOldTemples();
                break;
            case 'new':
                filterNewTemples();
                break;
            case 'large':
                filterLargeTemples();
                break;
            case 'small':
                filterSmallTemples();
                break;
            case 'home':
                displayAllTemples();
                break;
            default:
                break;
        }
    });
});

// Initial display of all temples on page load
document.addEventListener('DOMContentLoaded', displayAllTemples);

