function menu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Close menu when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

function more() {
  // For now just alert - you can add more images later
  alert("More gallery images coming soon! Add more <img> tags in gallery section.");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button after 300px scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Smooth scroll to top when clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});