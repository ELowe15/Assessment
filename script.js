// Dark Mode Toggle
const body = document.body;
const toggleButton = document.getElementById('dark-mode-toggle');

// Check localStorage for mode preference
if (localStorage.getItem('theme') === 'light') {
  body.classList.remove('dark');
  body.classList.add('light');
}

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

// Smooth Scroll with Offset for Sticky Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight, // Offset by header height
        behavior: 'smooth'
      });
    }
  });
});

// Dynamic Features Section - No HTML in JavaScript
const features = [
  {
    title: 'Feature 1',
    image: '', // No image provided
    description: 'Feature 1 description goes here.',
  },
  {
    title: 'Feature 2',
    image: '',
    description: 'Feature 2 description goes here.',
  },
  {
    title: 'Feature 3',
    image: '', // No image provided
    description: 'Feature 3 description goes here.',
  },
];

const featuresSection = document.getElementById('features');
const placeholderImage = 'placeHolderImage.jpg'; // Path to your placeholder image

// Generate and display features dynamically
features.forEach((feature, index) => {
  const featureDiv = document.createElement('div');
  featureDiv.classList.add('feature');

  const featureTitle = document.createElement('h2');
  featureTitle.classList.add('feature-title');
  featureTitle.innerText = feature.title;

  const featureContent = document.createElement('div');
  featureContent.classList.add('feature-content');

  const featureImage = document.createElement('img');
  featureImage.src = feature.image || placeholderImage; // Use placeholder image if none is provided
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
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let errorMessage = document.getElementById("error-message");

  // Clear previous error message
  errorMessage.textContent = "";

  // Simple validation
  if (!name || !email || !message) {
    errorMessage.textContent = "All fields are required!";
    return;
  }

  // Validate email format
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return;
  }

  // If no errors, submit the form
  alert("Form submitted successfully!");
});