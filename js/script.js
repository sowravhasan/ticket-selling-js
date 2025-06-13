// Initialize mobile menu and modern interactions
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".topnav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Reveal animation for elements
  function reveal() {
    const elements = document.querySelectorAll(
      ".card, .section-header, .btn, .reveal"
    );
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = elementTop < window.innerHeight && elementBottom >= 0;

      if (isVisible) {
        element.classList.add("animate-fade-in", "visible");
      }
    });
  }

  // Initial check for elements in view
  reveal();

  // Add scroll event listener
  window.addEventListener("scroll", () => {
    reveal();
    updateActiveNavLink();
  });

  // Update active navigation link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.topnav a[href^="#"]');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Form validation and enhancement
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      // Add focus effects
      input.addEventListener("focus", () => {
        input.parentElement.classList.add("focused");
      });

      input.addEventListener("blur", () => {
        input.parentElement.classList.remove("focused");
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your form submission logic here

      // Show success message example
      const successMessage = document.createElement("div");
      successMessage.className = "form-success animate-fade-in";
      successMessage.textContent = "Form submitted successfully!";
      form.appendChild(successMessage);

      // Reset form after delay
      setTimeout(() => {
        form.reset();
        successMessage.remove();
      }, 3000);
    });
  });
});
