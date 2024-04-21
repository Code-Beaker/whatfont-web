// Display year in the footer using Date
const footerYear = document.getElementById("copyrightYear");
let d = new Date();

footerYear.textContent = d.getFullYear();

// Navigation functionality
const NavbarToggle = document.querySelector("#NavBarToggle");
const NavBar = document.querySelector("#sidebar");

NavbarToggle.addEventListener("click", function () {
  NavbarToggle.classList.toggle("nav__toggle-focus");
  NavBar.classList.toggle("sidebar-show");
});
