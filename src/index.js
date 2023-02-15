const navbarTogglers = document.querySelectorAll(".toggle-navbar");

function toggleNavBar() {
  // console.log("Toggling");
  document.body.classList.toggle("opened-navbar");
}

navbarTogglers.forEach(el => el.addEventListener("click", toggleNavBar));
