const footerYear = document.getElementById("copyrightYear");

let d = new Date();

footerYear.textContent = d.getFullYear();

const navToggleBtn = document.getElementById("navToggler");
const sidebar = document.getElementById("sidebarMobileNav");

navToggleBtn.addEventListener("click", () => {
  console.log("clicked");
  navToggleBtn.classList.toggle("nav__toggle-btn-active");
  sidebar.classList.toggle("sidebar__show");
});
