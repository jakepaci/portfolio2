// function toggleMenu() {
//   const menu = document.querySelector(".menu_links");
//   const icon = document.querySelector(".hamburger_icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }

// script.js

const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

// Function to show the sidebar
function showSidebar() {
  sidebar.classList.add("open"); // Add the 'open' class to slide in
}

// Function to hide the sidebar
function hideSidebar() {
  sidebar.classList.remove("open"); // Remove the 'open' class to slide out
}

// Event listeners
menuButton.addEventListener("click", showSidebar);
sidebar.addEventListener("click", hideSidebar); // Optional: close sidebar on click

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
