// Author: Evan Lowe | Date: 2025-01-20 | File: script.js

// Dark Mode Toggle
const body = document.body; // Access the <body> element of the page
const toggleButton = document.getElementById('dark-mode-toggle'); // Access the button used to toggle dark mode

// Check localStorage for mode preference (whether the user prefers dark or light mode)
if (localStorage.getItem('theme') === 'light') {
  // If the stored preference is 'light', apply light mode
  body.classList.remove('dark'); // Remove dark mode class
  body.classList.add('light'); // Add light mode class
}

// Event listener for the dark mode toggle button
toggleButton.addEventListener('click', () => {
  // If dark mode is active, switch to light mode
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light'); // Save the preference to localStorage
  } else {
    // If light mode is active, switch to dark mode
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Save the preference to localStorage
  }
});

// Smooth Scroll with Offset for Sticky Header
// This ensures that when an anchor link is clicked, it scrolls to the target section with an offset for the header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor link behavior

    const targetId = this.getAttribute('href').substring(1); // Extract the target section ID from the href
    const targetElement = document.getElementById(targetId); // Get the target element by ID

    // If the target element exists
    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header
      // Scroll to the target element, offsetting the scroll position by the header height
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight, // Subtract header height from the target element's top position
        behavior: 'smooth' // Enable smooth scrolling
      });
    }
  });
});

// The features section is dynamically generated using JavaScript, without any HTML code in the JavaScript file
const features = [
  {
    title: 'Feature 1',
    image: '',
    description: 'Feature 1 description goes here.',
  },
  {
    title: 'Feature 2',
    image: '',
    description: 'Feature 2 description goes here.',
  },
  {
    title: 'Feature 3',
    image: '',
    description: 'Feature 3 description goes here.',
  },
];

const featuresSection = document.getElementById('features'); // Get the container element for the features section
const placeholderImage = 'placeHolderImage.jpg'; // Path to the placeholder image if no image is provided for a feature

// Generate and display features dynamically by iterating over the features array
features.forEach((feature, index) => {
  const featureDiv = document.createElement('div');
  featureDiv.classList.add('feature');

  const featureTitle = document.createElement('h2');
  featureTitle.classList.add('feature-title');
  featureTitle.innerText = feature.title;

  const featureContent = document.createElement('div');
  featureContent.classList.add('feature-content');

  const featureImage = document.createElement('img');
  featureImage.src = feature.image || placeholderImage;
  featureImage.alt = feature.image ? `${feature.title} Image` : 'Placeholder Image';

  const featureDescription = document.createElement('div');
  featureDescription.classList.add('description');
  featureDescription.innerHTML = `<p>${feature.description}</p>`;

  featureContent.appendChild(featureImage);
  featureContent.appendChild(featureDescription);

  featureDiv.appendChild(featureTitle);
  featureDiv.appendChild(featureContent);

  featuresSection.appendChild(featureDiv);
});

// Form Validation for Contact Section
// Event listener for form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting by default

  // Get the form fields' values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let errorMessage = document.getElementById("error-message"); // Get the error message element

  // Clear previous error message
  errorMessage.textContent = "";

  // Simple validation to check if all fields are filled out
  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required!"; // If any field is empty, show an error message
    return; // Exit the function to prevent form submission
  }

  // Validate the email format using a regular expression
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address."; // Show an error if the email is invalid
    return; // Exit the function to prevent form submission
  }

  // If no errors, show a success message
  alert("Form submitted successfully!"); // This could be replaced with an actual form submission or API call
});