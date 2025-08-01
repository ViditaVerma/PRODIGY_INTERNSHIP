// Scroll Navbar Background
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.querySelector('nav ul');
  navLinks.classList.toggle('active');
}
// Open/Close Contact Form
function openForm() {
  document.getElementById('messageForm').classList.add('active');
}
function closeForm() {
  document.getElementById('messageForm').classList.remove('active');
}
