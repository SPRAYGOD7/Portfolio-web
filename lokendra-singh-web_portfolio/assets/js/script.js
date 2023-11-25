'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
// Select the "Download CV" button by its ID
const downloadButton = document.getElementById("download-button");

// Add a click event listener to the button
downloadButton.addEventListener("click", function () {
    // Create an invisible anchor element
    const link = document.createElement('a');
    link.style.display = 'none';

    // Set the download link to the PDF file
    link.href = 'Lokendra sing CV (1).pdf';
    link.download = 'Lokendra sing CV (1).pdf'; // The desired filename for the downloaded PDF

    // Trigger a click event on the anchor element to initiate the download
    document.body.appendChild(link);
    link.click();

    // Remove the anchor element
    document.body.removeChild(link);
});

// Select the "Certificates" button by its ID
const certificateButton = document.getElementById("certificate-button");

// Add a click event listener to the button
certificateButton.addEventListener("click", function () {
    // Specify the URL of the external link
    const externalLink = 'https://portfolio-lokendra-singh.netlify.app/'; // Replace with the actual URL

    // Open the external link in a new tab or window
    window.open(externalLink, '_blank');
});
document.getElementById("github-button").addEventListener("click", function() {
  // Define the URL you want to open in a new tab
  var githubUrl = "https://github.com/spraygod7";

  // Open the URL in a new tab
  window.open(githubUrl, "_blank");
});