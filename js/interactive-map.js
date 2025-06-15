// Interactive Seating Chart functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add click listeners to the SVG sections
  const svg = document.querySelector(".arena-svg");
  if (svg) {
    svg.addEventListener("click", function (e) {
      // Find clicked element or its parent with section data
      const target = e.target;
      const section =
        target.closest("[data-section]") ||
        (target.nodeName === "text" &&
        target.parentNode.classList.contains("section-label")
          ? target.parentNode
          : null);

      if (section) {
        // Get section data
        const sectionNumber = section.getAttribute("data-section");
        const category = getSectionCategory(sectionNumber);
        const price = getSectionPrice(sectionNumber);
        const seats = getSectionAvailableSeats(sectionNumber);
        const description = getSectionDescription(sectionNumber, category);

        // Show the section info in the panel
        showSectionInfo(sectionNumber, category, price, seats, description);
        // Add visual selection feedback (with gentle animation)
        clearAllSelections();

        // Add selected class for styling
        section.classList.add("selected"); // Apply minimal styles for text elements - just enough for readability
        if (section.querySelector("text")) {
          const textElements = section.querySelectorAll("text");
          textElements.forEach((textElement) => {
            // Simple white text with minimal outline
            textElement.setAttribute("fill", "#FFFFFF");
            textElement.setAttribute("stroke", "#000000");
            textElement.setAttribute("stroke-width", "0.3px");
            // Remove any existing shadows that might affect legibility
            textElement.style.textShadow = "none";
          });
        }
      }
    });
  }

  // Reset button functionality
  const resetButton = document.querySelector('button[onclick="resetView()"]');
  if (resetButton) {
    resetButton.addEventListener("click", function () {
      resetView();
    });
  }

  // Buy now button functionality
  const buyNowBtn = document.getElementById("buyNowBtn");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", function () {
      window.location.href = "buy.html";
    });
  }
});

// Reset view
function resetView() {
  const sectionDetails = document.getElementById("sectionDetails");
  const defaultInfo = document.getElementById("defaultInfo");

  if (sectionDetails && defaultInfo) {
    sectionDetails.classList.add("hidden");
    defaultInfo.classList.remove("hidden");
  }

  clearAllSelections();
}

// Clear all selected sections
function clearAllSelections() {
  // Remove selected class from all elements
  document
    .querySelectorAll(".arena-svg [data-section], .section-label")
    .forEach((el) => {
      el.classList.remove("selected");
    });
  // Reset all text elements to default style - simpler approach
  document.querySelectorAll("text").forEach((text) => {
    // For most text elements, restore to white
    text.setAttribute("fill", "white");

    // Remove any added attributes
    text.removeAttribute("stroke");
    text.removeAttribute("stroke-width");
    text.removeAttribute("paint-order");

    // Remove any added inline styles
    text.style.textShadow = "";
    text.style.fontSize = "";
    text.style.fontWeight = "";
  });
}

// Show section information in the panel
function showSectionInfo(section, category, price, seats, description) {
  // Hide the "no section selected" message
  const defaultInfoEl = document.getElementById("defaultInfo");
  const sectionDetailsEl = document.getElementById("sectionDetails");

  if (defaultInfoEl && sectionDetailsEl) {
    defaultInfoEl.classList.add("hidden");
    sectionDetailsEl.classList.remove("hidden");

    // Update the section info
    document.getElementById("sectionName").textContent = `Section ${section}`;
    document.getElementById("sectionPrice").textContent = price;
    document.getElementById("availableSeats").textContent = seats;
    document.getElementById("sectionLevel").textContent = category;
    document.getElementById("sectionDescription").textContent = description;

    // Update section badge color based on category
    const sectionBadge = document.getElementById("sectionBadge");
    if (sectionBadge) {
      sectionBadge.className =
        "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-2";

      if (category.includes("VIP")) {
        sectionBadge.classList.add("bg-amber-100", "text-amber-800");
      } else if (category.includes("Lower")) {
        sectionBadge.classList.add("bg-blue-100", "text-blue-800");
      } else if (category.includes("Upper")) {
        sectionBadge.classList.add("bg-green-100", "text-green-800");
      } else {
        sectionBadge.classList.add("bg-gray-100", "text-gray-800");
      }
    }

    // Update the view quality stars based on category
    const viewQuality = document.getElementById("viewQuality");
    if (viewQuality) {
      viewQuality.innerHTML = "";

      let stars = 3;
      if (category.includes("VIP")) stars = 5;
      else if (category.includes("Lower")) stars = 4;
      else if (category.includes("Upper")) stars = 3;

      for (let i = 0; i < 5; i++) {
        const star = document.createElement("svg");
        star.classList.add("w-4", "h-4");
        star.setAttribute("fill", "currentColor");
        star.setAttribute("viewBox", "0 0 20 20");
        star.setAttribute("xmlns", "http://www.w3.org/2000/svg");

        if (i < stars) {
          star.classList.add("text-yellow-400");
        } else {
          star.classList.add("text-gray-300");
        }

        star.innerHTML =
          '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>';

        viewQuality.appendChild(star);
      }
    }
  }
}

// Get section category based on section number
function getSectionCategory(section) {
  const sectionNum = parseInt(section);

  if (isNaN(sectionNum)) {
    if (section.startsWith("M")) {
      return "Media Level";
    }
    return "VIP Level";
  }

  if (sectionNum >= 200) {
    return "Upper Level";
  } else if (sectionNum >= 100) {
    return "Lower Level";
  } else {
    return "Floor Level";
  }
}

// Get section price based on section number
function getSectionPrice(section) {
  const sectionNum = parseInt(section);

  if (isNaN(sectionNum)) {
    if (section.startsWith("M")) {
      return "$250";
    }
    return "$550";
  }

  if (sectionNum >= 200) {
    return "$85-125";
  } else if (sectionNum >= 100) {
    return "$180-250";
  } else {
    return "$350-450";
  }
}

// Get available seats based on section number
function getSectionAvailableSeats(section) {
  const sectionNum = parseInt(section);

  if (isNaN(sectionNum)) {
    return "12";
  }

  if (sectionNum >= 200) {
    return "60-80";
  } else if (sectionNum >= 100) {
    return "30-50";
  } else {
    return "15-25";
  }
}

// Get section description based on section and category
function getSectionDescription(section, category) {
  if (category.includes("VIP")) {
    return "Premium VIP seating with the best views and exclusive amenities including drink service and padded seats.";
  } else if (category.includes("Lower")) {
    return "Lower level seating with excellent proximity to the action. These seats offer a closer experience with great sightlines.";
  } else if (category.includes("Upper")) {
    return "Upper level seating with a good overhead view of the entire arena. These seats offer an economical option with full visibility.";
  } else if (category.includes("Media")) {
    return "Media section with excellent views and workspace capabilities. Reserved for press and media personnel.";
  } else {
    return "Floor level seating with the closest proximity to the action.";
  }
}

// For selecting seats
function selectSeats() {
  window.location.href = "buy.html";
}

// For wishlist
function addToWishlist() {
  alert("Added to wishlist!");
}
