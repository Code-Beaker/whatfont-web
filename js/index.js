const footerYear = document.getElementById("copyrightYear");

let d = new Date();

footerYear.textContent = d.getFullYear();

const NavToggleButton = document.getElementById("NavBarToggle");
const NavigationBar = document.getElementById("NavBar");

NavToggleButton.addEventListener("click", () => {
  NavToggleButton.classList.toggle("nav__toggle-focus");
  NavigationBar.classList.toggle("nav-show");
});
