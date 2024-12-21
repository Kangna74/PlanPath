function addAllEventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".nav-bar");

    menuToggle.addEventListener("click", () => {
      navBar.classList.toggle("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-button");
    const navBar = document.querySelector(".nav-bar");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navBar.classList.remove("active");
      });
    });
  });
}

addAllEventListeners();
