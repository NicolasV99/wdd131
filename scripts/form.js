// Array of product objects
const products = [
    {
      id: 'fc-1888',
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: 'fc-2050',
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: 'fs-1987',
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: 'ac-2000',
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: 'jj-1969',
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];
  


  document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
  
    // Populate product options dynamically
    products.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    // Check if on review page
    if (document.getElementById('reviewCount')) {
      updateReviewCount();
    }
  });
  
  function updateReviewCount() {
    if (localStorage.getItem('reviewCount')) {
      let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
      document.getElementById('reviewCount').textContent = reviewCount;
    } else {
      localStorage.setItem('reviewCount', 1);
      document.getElementById('reviewCount').textContent = 1;
    }
  }

  
// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

