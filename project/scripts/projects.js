// Array of projects
const projects = [
    {
        title: 'Qanvas',
        description: 'Short description of Project 1.',
        image: 'images/qanvas.png',
        category: 'custom',
        link: 'https://qanvas.com.co/'
    },
    {
        title: 'Taylor Henderson',
        description: 'Short description of Project 2.',
        image: 'images/taylor-henderson.png',
        category: 'agent',
        link: 'https://westtexasrealestate.net/'
    },
    {
        title: 'Robert Ramey',
        description: 'Short description of Project 3.',
        image: 'images/robert-ramey.png',
        category: 'agent',
        link: 'https://robertrameyrealty.com/'
    },
    {
        title: 'Rick Gonzalez Properties',
        description: 'Short description of Project 3.',
        image: 'images/rick-gonzalez-properties.png',
        category: 'team',
        link: 'https://rickgonzalezproperties.com/'
    }
];
// Function to display projects
function displayProjects(filteredProjects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = ''; // Clear existing content

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.title} Image">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Function to filter projects
function filterProjects(category) {
    if (category === 'all') {
        displayProjects(projects);
    } else {
        const filteredProjects = projects.filter(project => project.category === category);
        displayProjects(filteredProjects);
    }
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.getAttribute('data-filter'));
    });
});

// Initial display of all projects
displayProjects(projects);

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});



// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
