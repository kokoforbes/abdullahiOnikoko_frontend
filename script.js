// Hamburger menu toggle functionality
const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav");

if (hamburger && mainNav) {
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";

    // Toggle aria-expanded attribute
    hamburger.setAttribute("aria-expanded", !isExpanded);

    // Toggle active class on navigation
    mainNav.classList.toggle("active");

    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mainNav.contains(e.target)) {
      hamburger.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("active")) {
      hamburger.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("active");
      document.body.style.overflow = "";
      hamburger.focus();
    }
  });

  // Close menu on window resize if switching to desktop view
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      hamburger.setAttribute("aria-expanded", "false");
      mainNav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
