const instagram = document.querySelector(".instagram__flex");

Array.from(instagram.children).forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  instagram.appendChild(duplicateNode);
});
document.addEventListener("DOMContentLoaded", function() {
  const certItems = document.querySelectorAll('.cert-item');

  certItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
      });

      item.addEventListener('mouseout', () => {
          item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      });
  });
});


document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.navbar').classList.toggle('active');  // Toggles background color and text color
});



document.getElementById("hire-btn").addEventListener("click", function(){
  document.getElementById("popup").style.display = "flex";
  });
  document.querySelector('.wrong').addEventListener('click', function(){
  document.getElementById('popup').style.display = 'none';
  });

  

  // Show popup function
  function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Close popup function
document.querySelector(".wrong").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});


const textElement = document.getElementById('animated-text');
const text = 'Graphic designer and Frontend Developer';
let index = 0;
let isDeleting = false;
let speed = 150;

function typeEffect() {
  if (!isDeleting && index < text.length) {
    // Add next character
    textElement.innerHTML = text.slice(0, ++index);
    speed = 150;  // Typing speed
  } else if (isDeleting && index > 0) {
    // Remove character
    textElement.innerHTML = text.slice(0, --index);
    speed = 100;  // Speed for erasing
  } else if (index === text.length) {
    // Start deleting after complete typing
    isDeleting = true;
    speed = 1000;  // Pause before deleting
  } else if (index === 0) {
    // Restart typing
    isDeleting = false;
    speed = 500;  // Pause before restarting
  }

  setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();



document.addEventListener('DOMContentLoaded', function () {
  const jobDetails = document.querySelectorAll('.job-details');

  jobDetails.forEach(function (detail) {
      detail.addEventListener('click', function () {
          const jobDescription = this.querySelector('.job-description');

          // Toggle visibility of job description
          if (jobDescription.style.display === 'none' || !jobDescription.style.display) {
              jobDescription.style.display = 'block';
              this.style.backgroundColor = '#12528a';  // Change background on expand
          } else {
              jobDescription.style.display = 'none';
              this.style.backgroundColor = '#fff';    // Reset background on collapse
          }
      });

      // Initially hide all job descriptions
      detail.querySelector('.job-description').style.display = 'none';
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const jobDetails = document.querySelectorAll('.job-details');

  jobDetails.forEach(function (detail) {
      detail.addEventListener('click', function () {
          // Get all child elements of the clicked job-details
          const allTextElements = this.querySelectorAll('*');

          allTextElements.forEach(function (element) {
              // Toggle text color between white and black for all child elements
              if (element.style.color === 'white') {
                  element.style.color = 'black';
              } else {
                  element.style.color = 'white';
              }
          });
      });
  });
});



