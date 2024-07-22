// Array of projects
const projects = [
    {
        title: 'Qanvas',
        description: '',
        image: 'images/qanvas.png',
        category: 'custom',
        link: 'https://qanvas.com.co/'
    },
    {
        title: 'Taylor Henderson',
        description: '',
        image: 'images/taylor-henderson.png',
        category: 'agent',
        link: 'https://westtexasrealestate.net/'
    },
    {
        title: 'Robert Ramey',
        description: '',
        image: 'images/robert-ramey.png',
        category: 'agent',
        link: 'https://robertrameyrealty.com/'
    },
    {
        title: 'Rick Gonzalez Properties',
        description: '',
        image: 'images/rick-gonzalez-properties.png',
        category: 'team',
        link: 'https://rickgonzalezproperties.com/'
    }
];

const projectsContainer = document.getElementById('projectsContainer');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <a href="${project.link}" target="_blank">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
            </a>
        `;
        projectsContainer.appendChild(projectCard);
    });


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
