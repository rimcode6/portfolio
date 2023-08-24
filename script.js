// Get references to DOM elements
const toggleMenuButton = document.getElementById("toggleMenu");
const nav = document.querySelector("nav");

// Function to toggle the navigation menu
function toggleMenu() {
    nav.classList.toggle("show-menu");
}

// Event listener to toggle the menu when the button is clicked
toggleMenuButton.addEventListener("click", toggleMenu);

// Close the menu if a menu item is clicked
const menuItems = document.querySelectorAll("nav ul li a");
menuItems.forEach((item) => {
    item.addEventListener("click", toggleMenu);
});
