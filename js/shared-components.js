// Shared Components for all pages

// Add Header Compon  const header = document.createElement("header");
header.innerHTML = `        <nav class="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg transition-all duration-300" style="max-width: 100vw; overflow-x: hidden;">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="max-width: 100%;">
                <div class="flex justify-between h-20 relative">`;
function addHeader() {
  // Add CSS for animated underline effect
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    .nav-link {
      position: relative;
      padding-bottom: 5px;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: currentColor;
      transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
      .nav-link.active::after {
      width: 100%;
    }    /* Mobile-specific menu enhancements */
    @media (max-width: 768px) {
      /* Better tap targets for mobile */
      .mobile-menu-link {
        padding: 12px 16px !important;
        margin: 4px 0 !important;
      }
        /* Make hamburger menu more visible and contained within bounds */
      .mobile-menu-button {
        padding: 10px !important;
        position: relative !important;
        right: 0 !important;
        z-index: 50 !important;
        margin-right: 0 !important;
        box-shadow: 0 0 10px rgba(0,0,0,0.1) !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
        border-radius: 6px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      /* Ensure header stays within bounds */
      nav {
        overflow-x: hidden !important;
        width: 100% !important;
      }

      /* Improved container for mobile menu */
      .flex.justify-between {
        width: 100% !important;
        padding-right: 8px !important;
      }
    }
  `;
  document.head.appendChild(styleElement);
  const header = document.createElement("header");
  header.innerHTML = `        <nav class="fixed w-full z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-lg transition-all duration-300" style="overflow-x: hidden;">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style="max-width: 100%;">
                <div class="flex justify-between h-20 relative">
                    <div class="flex-shrink-0 flex items-center">
                        <a href="index.html" class="block">
                            <img src="assets/logo.png" alt="Logo" class="h-12 w-auto">
                        </a>
                    </div>
                      <!-- Mobile menu button -->
                    <div class="flex items-center lg:hidden" style="position: relative; z-index: 50;">
                        <button type="button" 
                                class="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                                aria-controls="mobile-menu" 
                                aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Desktop menu -->
                    <div class="hidden lg:flex lg:items-center lg:space-x-8">
                        <a href="index.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Home</a>
                        <a href="box-office.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Box Office</a>
                        <a href="planner.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Event Planner</a>
                        <a href="information.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Information</a>
                        <a href="calendar.html" class="nav-link text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent font-medium transition-colors">Calendar</a>
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
            </div>
              <!-- Mobile menu -->
            <div class="lg:hidden hidden" id="mobile-menu" style="max-width: 100vw; overflow-x: hidden;">
                <div class="pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-t border-gray-200 dark:border-gray-700" style="max-width: 100%; overflow-x: hidden;">
                    <a href="index.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Home</a>
                    <a href="box-office.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Box Office</a>
                    <a href="planner.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Event Planner</a>
                    <a href="information.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Information</a>
                    <a href="calendar.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Calendar</a>
                    <a href="contact-us.html" class="mobile-menu-link nav-link block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent transition-all">Contact Us</a>
                    <!-- Mobile theme toggle -->
                    <div class="px-3 py-3 flex items-center justify-between">
                      <span class="text-base font-medium text-gray-700 dark:text-gray-200">Dark Mode</span>
                      <button id="mobile-theme-toggle" class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300">
                        <svg class="w-5 h-5 text-gray-700 dark:text-gray-200 dark:hidden" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                        <svg class="w-5 h-5 text-gray-200 hidden dark:block" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                </div>
            </div>
        </nav>
    `;
  document.body.prepend(header);
}

// Add Footer Component
function addFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `        <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0 bg-grid-slate-100 bg-[length:40px_40px] dark:bg-grid-slate-100/[0.05]"></div>
            </div>
            
            <!-- Main Footer Content -->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <!-- Top Section -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
                    <!-- Brand Section -->
                    <div class="lg:col-span-2">
                        <div class="flex items-center mb-6">
                            <img src="assets/logo.png" alt="Patriot Arena Logo" class="h-12 w-auto mr-4">
                            <div>
                                <h3 class="text-2xl font-bold" style="color: #2D83A5;">Patriot Arena</h3>
                                <p class="text-gray-300 dark:text-gray-400 text-sm">Uniting Our Community, One Event at a Time</p>
                            </div>
                        </div>
                        <p class="text-gray-300 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                            Experience world-class entertainment and events at Boston's premier venue. From concerts to sports, 
                            we bring unforgettable moments to life.
                        </p>
                        <!-- Newsletter Signup -->
                        <div class="flex flex-col sm:flex-row gap-3 max-w-md">
                            <input type="email" placeholder="Enter your email" 
                                   class="flex-1 px-4 py-3 bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-lg 
                                          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent 
                                          text-white placeholder-gray-300 dark:placeholder-gray-400 backdrop-blur-sm"
                                   style="--tw-ring-color: #243F88;">
                            <button class="px-6 py-3 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 
                                           shadow-lg hover:shadow-xl whitespace-nowrap hover:opacity-90"
                                    style="background-color: #243F88;">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div>
                        <h4 class="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul class="space-y-3">
                            <li><a href="index.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   style="--hover-color: #243F88;"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Home
                            </a></li>
                            <li><a href="box-office.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Box Office
                            </a></li>
                            <li><a href="planner.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Event Planning
                            </a></li>
                            <li><a href="calendar.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Event Calendar
                            </a></li>
                            <li><a href="information.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Information
                            </a></li>
                            <li><a href="interactive-map.html" class="text-gray-300 dark:text-gray-400 transition-colors duration-300 flex items-center group"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">
                                <span class="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style="background-color: #243F88;"></span>
                                Seating Map
                            </a></li>
                        </ul>
                    </div>

                    <!-- Contact Info -->
                    <div>
                        <h4 class="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                        <div class="space-y-4">
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0" style="background-color: #243F88;">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium">Address</p>
                                    <p class="text-gray-300 dark:text-gray-400 text-sm">123 Arena Way<br>Boston, MA 02108</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0" style="background-color: #243F88;">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium">Phone</p>
                                    <p class="text-gray-300 dark:text-gray-400 text-sm">(555) 123-4567</p>
                                </div>
                            </div>
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0" style="background-color: #243F88;">
                                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p class="text-white font-medium">Email</p>
                                    <p class="text-gray-300 dark:text-gray-400 text-sm">info@patriotarena.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                <!-- Bottom Section -->
                <div class="border-t border-white/10 dark:border-white/5 pt-8">
                    <div class="flex flex-col lg:flex-row justify-between items-center">
                        <!-- Copyright -->
                        <div class="text-center lg:text-left mb-6 lg:mb-0">
                            <p class="text-gray-300 dark:text-gray-400 text-sm">
                                &copy; 2025 Patriot Arena. All rights reserved. 
                                <span class="hidden sm:inline">Made with ❤️ in Boston.</span>
                            </p>
                            <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-2">
                                <a href="#" class="text-gray-400 dark:text-gray-500 transition-colors duration-300 text-xs"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">Privacy Policy</a>
                                <a href="#" class="text-gray-400 dark:text-gray-500 transition-colors duration-300 text-xs"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">Terms of Service</a>
                                <a href="#" class="text-gray-400 dark:text-gray-500 transition-colors duration-300 text-xs"
                                   onmouseover="this.style.color='#243F88'" 
                                   onmouseout="this.style.color=''">Accessibility</a>
                            </div>
                        </div>

                        <!-- Social Media -->
                        <div class="flex items-center space-x-4">
                            <p class="text-gray-300 dark:text-gray-400 text-sm mr-4 hidden sm:block">Follow Us:</p>
                            <a href="#" class="w-12 h-12 bg-white/10 dark:bg-white/5 hover:opacity-90
                                           rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                               onmouseover="this.style.backgroundColor='#243F88'" 
                               onmouseout="this.style.backgroundColor=''">
                                <img src="assets/facebook-logo.png" alt="Facebook" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            </a>
                            <a href="#" class="w-12 h-12 bg-white/10 dark:bg-white/5 hover:opacity-90
                                           rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                               onmouseover="this.style.backgroundColor='#243F88'" 
                               onmouseout="this.style.backgroundColor=''">
                                <img src="assets/twitter-logo.png" alt="Twitter" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            </a>
                            <a href="#" class="w-12 h-12 bg-white/10 dark:bg-white/5 hover:opacity-90
                                           rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
                               onmouseover="this.style.backgroundColor='#243F88'" 
                               onmouseout="this.style.backgroundColor=''">
                                <img src="assets/instagram-logo.png" alt="Instagram" class="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            </a>
                        </div>
                    </div>
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

    /* Mobile responsive fixes for chatbot widget and navigation */
    @media (max-width: 768px) {
      /* Ensure proper z-index layering for mobile navigation */
      .mobile-menu-button {
        z-index: 50 !important;
      }
      
      /* Adjust mobile menu position */
      #mobile-menu {
        z-index: 49 !important;
      }
      
      /* When mobile menu is open, adjust chatbot appearance */
      body.mobile-menu-open #landbot-launcher-button {
        opacity: 0.7 !important;
      }
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
    }    .dark input::placeholder,
    .dark textarea::placeholder {
      color: #9CA3AF !important;
    }
    
    /* Responsive styles for MOBILE ONLY */
    @media (max-width: 768px) {
      /* Only apply these styles on mobile devices */
      .mobile-menu-button {
        display: flex !important;
      }
      
      /* More spacious tap targets on mobile */
      button, .btn, a.btn {
        min-height: 44px;
        min-width: 44px;
      }
      
      /* Fix padding on mobile containers */
      .container {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
      }
      
      /* Mobile-specific font adjustments */
      h1 {
        font-size: clamp(2rem, 8vw, 4rem) !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Add chatbot component
function addChatbot() {
  // Add responsive styles for Landbot
  const landbotStyle = document.createElement("style");
  landbotStyle.textContent = `    /* Landbot responsive fixes */
    @media (max-width: 768px) {
      #landbot-container {
        max-height: 60vh !important;
        max-width: 85vw !important;
        bottom: 70px !important;
        right: 10px !important;
        left: auto !important;
        z-index: 40 !important;
        transform-origin: bottom right !important;
        transform: scale(0.9) !important;
        box-shadow: 0 0 15px rgba(0,0,0,0.2) !important;
        max-width: calc(100vw - 20px) !important;
        overflow: hidden !important;
      }
      
      #landbot-launcher-button {
        bottom: 15px !important;
        right: 15px !important;
        z-index: 39 !important;
        transform: scale(0.85) !important;
        transition: all 0.3s ease !important;
        position: fixed !important;
        box-shadow: 0 3px 12px rgba(0,0,0,0.25) !important;
      }
        .Landbot__iframeContainer {
        max-height: calc(100% - 20px) !important;
        max-width: calc(100% - 20px) !important;
      }
      
      /* Improve chatbot message display */
      .Landbot__message {
        max-width: 85% !important;
      }
      
      /* Better scrolling for mobile */
      .Landbot__chatContainer {
        -webkit-overflow-scrolling: touch !important;
      }

      /* Ensure the widget doesn't overlap with navigation controls */
      .mobile-menu-button {
        z-index: 50 !important;
      }
      
      /* When mobile menu is open, adjust chatbot position */
      body.mobile-menu-open #landbot-launcher-button {
        opacity: 0.7 !important;
      }
    }
  `;
  document.head.appendChild(landbotStyle);

  // Only load chatbot when user interacts with the page
  window.addEventListener("mouseover", initLandbot, { once: true });
  window.addEventListener("touchstart", initLandbot, { once: true });
  window.addEventListener("scroll", initLandbot, { once: true });

  var myLandbotInitialized = false;
  function initLandbot() {
    if (!myLandbotInitialized) {
      myLandbotInitialized = true; // Show loading indicator - adjusted for mobile responsiveness
      const chatIndicator = document.createElement("div");
      chatIndicator.className =
        "fixed bottom-6 right-4 md:bottom-8 md:right-8 bg-primary text-white p-3 rounded-full shadow-lg z-40";
      chatIndicator.innerHTML = `
        <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      `;
      document.body.appendChild(chatIndicator); // Load script
      var s = document.createElement("script");
      s.type = "module";
      s.async = true;
      s.addEventListener("load", function () {
        document.body.removeChild(chatIndicator);
        // Initialize Landbot with custom configuration for better mobile experience
        var myLandbot = new Landbot.Livechat({
          configUrl:
            "https://storage.googleapis.com/landbot.site/v3/H-2851272-Q9LAFREW126LFZTM/index.json",
        });

        // Add responsive customization to the Landbot widget
        setTimeout(() => {
          // Find and adjust the Landbot iframe container
          const landbotContainer = document.querySelector("#landbot-container");
          if (landbotContainer) {
            // Add responsive class
            landbotContainer.style.bottom = "60px"; // Adjust on mobile
            if (window.innerWidth < 768) {
              landbotContainer.style.bottom = "70px";
              landbotContainer.style.right = "15px";
              landbotContainer.style.zIndex = "40";
              landbotContainer.style.transformOrigin = "bottom right";
              landbotContainer.style.transform = "scale(0.9)";
              landbotContainer.style.maxWidth = "calc(100vw - 20px)";
              landbotContainer.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
              landbotContainer.style.overflow = "hidden";

              // Add a higher container to track when chatbot is open
              const chatbotWrapper = document.createElement("div");
              chatbotWrapper.id = "landbot-wrapper";
              chatbotWrapper.style.position = "fixed";
              chatbotWrapper.style.bottom = "0";
              chatbotWrapper.style.right = "0";
              chatbotWrapper.style.zIndex = "38";
              chatbotWrapper.style.maxWidth = "100vw";
              chatbotWrapper.style.overflow = "hidden";

              // Move the landbot container into our wrapper
              if (landbotContainer.parentNode) {
                landbotContainer.parentNode.appendChild(chatbotWrapper);
                chatbotWrapper.appendChild(landbotContainer);
              }
            }
          }

          // Find the launcher button and make it responsive
          const launcherButton = document.querySelector(
            "#landbot-launcher-button"
          );
          if (launcherButton) {
            // Adjust the launcher button position on mobile
            if (window.innerWidth < 768) {
              launcherButton.style.bottom = "15px";
              launcherButton.style.right = "15px";
              launcherButton.style.zIndex = "39";
              launcherButton.style.position = "fixed";
              launcherButton.style.transform = "scale(0.85)";
              launcherButton.style.boxShadow = "0 3px 12px rgba(0,0,0,0.25)";
              launcherButton.style.right = "10px";
              launcherButton.style.zIndex = "39";
              launcherButton.style.transform = "scale(0.8)";
              launcherButton.style.transition = "all 0.3s ease";

              // When mobile menu opens, we want to adjust the chatbot
              const mobileMenuButton = document.querySelector(
                ".mobile-menu-button"
              );
              if (mobileMenuButton) {
                mobileMenuButton.addEventListener("click", function () {
                  document.body.classList.toggle("mobile-menu-open");
                });
              }
            }
          }

          // Listen for orientation changes and resize events
          window.addEventListener("resize", function () {
            const landbotContainer =
              document.querySelector("#landbot-container");
            const launcherButton = document.querySelector(
              "#landbot-launcher-button"
            );
            if (window.innerWidth < 768) {
              if (landbotContainer) {
                landbotContainer.style.bottom = "70px";
                landbotContainer.style.right = "15px";
                landbotContainer.style.zIndex = "40";
                landbotContainer.style.transformOrigin = "bottom right";
                landbotContainer.style.transform = "scale(0.9)";
                landbotContainer.style.maxWidth = "calc(100vw - 20px)";
                landbotContainer.style.overflow = "hidden";
              }

              if (launcherButton) {
                launcherButton.style.bottom = "15px";
                launcherButton.style.right = "15px";
                launcherButton.style.zIndex = "39";
                launcherButton.style.position = "fixed";
                launcherButton.style.transform = "scale(0.85)";
              }
            } else {
              if (landbotContainer) {
                landbotContainer.style.bottom = "60px";
                landbotContainer.style.transform = "scale(1)";
              }

              if (launcherButton) {
                launcherButton.style.transform = "scale(1)";
              }
            }
          });
        }, 2000); // Wait for Landbot to initialize
      });
      s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
  }
}

// Initialize all shared components
function initSharedComponents() {
  addGlobalDarkModeStyles();
  addHeader();
  addFooter();
  addBackToTop();
  addDarkModeToggle();
  addGlobalDarkModeStyles();
  addChatbot();

  // Mobile menu functionality
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

  if (mobileMenuButton && mobileMenu) {
    // Ensure mobile menu button is visible on mobile
    mobileMenuButton.style.display = "flex";
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      // Add mobile-menu-open class to body to help with chatbot positioning
      document.body.classList.toggle("mobile-menu-open");
      // Accessibility improvement
      const expanded =
        mobileMenuButton.getAttribute("aria-expanded") === "true" || false;
      mobileMenuButton.setAttribute("aria-expanded", !expanded);
    });

    // Mobile theme toggle functionality
    if (mobileThemeToggle) {
      mobileThemeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        localStorage.setItem(
          "theme",
          document.documentElement.classList.contains("dark") ? "dark" : "light"
        );
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.contains(e.target) &&
        !mobileMenuButton.contains(e.target) &&
        !mobileMenu.classList.contains("hidden")
      ) {
        mobileMenu.classList.add("hidden");
        document.body.classList.remove("mobile-menu-open");
        mobileMenuButton.setAttribute("aria-expanded", "false");
      }
    });
  } // Update active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link, .mobile-menu-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-primary", "dark:text-accent", "active");
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
