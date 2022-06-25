// Hamburger menu selections

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Hamburger menu functionality

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});
// Close menu on nav menu clicks
// scroll to top functionality

// Theme switcher functionality
