// Shared Components for all pages

// Add Header Component
function addHeader() {
  const header = document.createElement("header");
  header.innerHTML = `        <nav class="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg transition-all duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-20">
                    <div class="flex-shrink-0 flex items-center">
                        <a href="index.html" class="block">
                            <img src="assets/logo.png" alt="Logo" class="h-12 w-auto">
                        </a>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="flex items-center lg:hidden">
                        <button type="button" 
                                class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                aria-controls="mobile-menu" 
                                aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>                    <!-- Desktop menu -->
                    <div class="hidden lg:flex lg:items-center lg:space-x-8">
                        <a href="index.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Home</a>
                        <a href="box-office.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Box Office</a>
                        <a href="planner.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Event Planner</a>
                        <a href="information.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Information</a>
                        <a href="calendar.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Calendar</a>
                        <a href="interactive-map.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Seating Map</a>
                        <!-- Theme Toggle Button -->
                        <button id="nav-theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                            <svg class="w-5 h-5 text-gray-700 dark:text-gray-200 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg class="w-5 h-5 text-gray-200 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <a href="contact-us.html" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>            <!-- Mobile menu -->
            <div class="lg:hidden hidden" id="mobile-menu">
                <div class="pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-t border-gray-200 dark:border-gray-700">
                    <a href="index.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Home</a>
                    <a href="box-office.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Box Office</a>
                    <a href="planner.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Event Planner</a>
                    <a href="information.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Information</a>
                    <a href="calendar.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Calendar</a>
                    <a href="interactive-map.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Seating Map</a>
                    <a href="contact-us.html" class="mobile-menu-link block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-primary dark:hover:border-accent border-l-4 border-transparent transition-all">Contact Us</a>
                </div>
            </div>
        </nav>
    `;
  document.body.prepend(header);
}

// Add Footer Component
function addFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <div class="bg-gray-900 text-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Contact Info -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
                        <div class="space-y-3">
                            <p class="flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                (555) 123-4567
                            </p>
                            <p class="flex items-center">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                info@patriotarena.com
                            </p>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="box-office.html" class="hover:text-primary transition-colors">Box Office</a></li>
                            <li><a href="planner.html" class="hover:text-primary transition-colors">Event Planning</a></li>
                            <li><a href="calendar.html" class="hover:text-primary transition-colors">Event Calendar</a></li>
                            <li><a href="information.html" class="hover:text-primary transition-colors">Information</a></li>
                        </ul>
                    </div>

                    <!-- Social Media -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
                        <div class="flex space-x-4">
                            <a href="#" class="hover:text-primary transition-colors">
                                <img src="assets/facebook-logo.png" alt="Facebook" class="w-6 h-6">
                            </a>
                            <a href="#" class="hover:text-primary transition-colors">
                                <img src="assets/twitter-logo.png" alt="Twitter" class="w-6 h-6">
                            </a>
                            <a href="#" class="hover:text-primary transition-colors">
                                <img src="assets/instagram-logo.png" alt="Instagram" class="w-6 h-6">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p class="text-gray-400">&copy; 2025 Patriot Arena. All rights reserved.</p>
                </div>
            </div>
        </div>
    `;
  document.body.appendChild(footer);
}

// Add Back to Top Button
function addBackToTop() {
  const button = document.createElement("button");
  button.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
  button.className =
    "fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:scale-105 z-40";
  button.id = "back-to-top";

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(button);

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    const button = document.getElementById("back-to-top");
    if (window.scrollY > 500) {
      button.classList.remove("opacity-0", "invisible");
      button.classList.add("opacity-100", "visible");
    } else {
      button.classList.add("opacity-0", "invisible");
      button.classList.remove("opacity-100", "visible");
    }
  });
}

// Add Dark Mode Toggle functionality to navigation
function addDarkModeToggle() {
  // Wait for the header to be added before adding event listener
  setTimeout(() => {
    const button = document.getElementById("nav-theme-toggle");
    if (button) {
      button.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "darkMode",
          document.documentElement.classList.contains("dark")
        );
      });
    }
  }, 100);

  // Check for saved dark mode preference
  if (
    localStorage.getItem("darkMode") === "true" ||
    (localStorage.getItem("darkMode") === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  }
}

// Add global dark mode text fixes
function addGlobalDarkModeStyles() {
  const style = document.createElement("style");
  style.textContent = `
    /* Navigation link styles for consistent spacing */
    .nav-link {
      position: relative;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }

    .dark .nav-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Global dark mode text visibility fixes */
    .dark .text-gray-500 {
      color: #9CA3AF !important;
    }
    
    .dark .text-gray-600 {
      color: #D1D5DB !important;
    }
    
    .dark .text-gray-400 {
      color: #9CA3AF !important;
    }
    
    /* Ensure proper contrast for interactive elements */
    .dark button .text-gray-500,
    .dark a .text-gray-500 {
      color: #9CA3AF !important;
    }
    
    .dark button:hover .text-gray-500,
    .dark a:hover .text-gray-500 {
      color: #D1D5DB !important;
    }
    
    /* Form elements in dark mode */
    .dark input, .dark textarea, .dark select {
      background-color: #374151 !important;
      border-color: #4B5563 !important;
      color: #F9FAFB !important;
    }
    
    .dark input::placeholder,
    .dark textarea::placeholder {
      color: #9CA3AF !important;
    }
  `;
  document.head.appendChild(style);
}

// Initialize all shared components
function initSharedComponents() {
  addGlobalDarkModeStyles();
  addHeader();
  addFooter();
  addBackToTop();
  addDarkModeToggle();
  addGlobalDarkModeStyles();

  // Mobile menu functionality
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.contains(e.target) &&
        !mobileMenuButton.contains(e.target)
      ) {
        mobileMenu.classList.add("hidden");
      }
    });
  }
  // Update active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-primary", "dark:text-accent");
      link.classList.remove("text-gray-700", "dark:text-gray-200");
    }
  });
  // Add scroll behavior to nav
  let lastScrollY = window.scrollY;
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      nav.classList.add("shadow-xl");
      nav.classList.remove("shadow-lg");
    } else {
      nav.classList.remove("shadow-xl");
      nav.classList.add("shadow-lg");
    }

    lastScrollY = currentScrollY;
  });
}
