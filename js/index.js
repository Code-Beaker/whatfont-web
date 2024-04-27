// Display year in the footer using Date
const footerYear = document.getElementById("copyrightYear");
let d = new Date();

footerYear.textContent = d.getFullYear();

// Navigation functionality
const navToggleButton = document.getElementById("navToggleButton");
const navBarLinks = document.getElementById("navbarLinks");

navToggleButton.addEventListener("click", () => {
  navToggleButton.classList.toggle("nav__toggle-focus");
  navBarLinks.classList.toggle("nav__links-show");
});
