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
  
  // Populate the Product Name select element
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Function to increment the review counter
  function incrementReviewCounter() {
    let reviewCounter = localStorage.getItem('reviewCounter');
    if (!reviewCounter) {
      reviewCounter = 0;
    }
    reviewCounter = parseInt(reviewCounter) + 1;
    localStorage.setItem('reviewCounter', reviewCounter);
  }
  
  // Handle form submission
  document.getElementById('productReviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    incrementReviewCounter();
    // Redirect to review.html page
    window.location.href = 'review.html';
  });

// Update the current year
const currentYearElement = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

// Update the last modified date
const lastModifiedElement = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;
