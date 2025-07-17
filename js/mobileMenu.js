// Mobile Menu functionality
export function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  const hamburgerLines = document.querySelectorAll(".hamburger-line");

  if (!mobileMenuToggle || !nav) return;

  let isMenuOpen = false;

  mobileMenuToggle.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    // Toggle menu visibility
    if (isMenuOpen) {
      nav.style.display = "flex";
      nav.style.position = "absolute";
      nav.style.top = "100%";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background =
        "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)";
      nav.style.backdropFilter = "blur(10px)";
      nav.style.boxShadow = "var(--shadow-xl)";
      nav.style.flexDirection = "column";
      nav.style.padding = "var(--spacing-lg)";
      nav.style.gap = "var(--spacing-md)";
      nav.style.zIndex = "1000";
      nav.style.borderRadius = "0 0 var(--radius-lg) var(--radius-lg)";
      nav.style.border = "1px solid rgba(14, 165, 233, 0.1)";
      nav.style.borderTop = "none";

      // Animate hamburger to X
      hamburgerLines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";

      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.left = "";
      nav.style.right = "";
      nav.style.background = "";
      nav.style.backdropFilter = "";
      nav.style.boxShadow = "";
      nav.style.flexDirection = "";
      nav.style.padding = "";
      nav.style.gap = "";
      nav.style.zIndex = "";
      nav.style.borderRadius = "";
      nav.style.border = "";

      // Reset hamburger
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "";
      hamburgerLines[2].style.transform = "";

      // Restore body scroll
      document.body.style.overflow = "";
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      isMenuOpen &&
      !mobileMenuToggle.contains(e.target) &&
      !nav.contains(e.target)
    ) {
      mobileMenuToggle.click();
    }
  });

  // Close menu when pressing Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });

  // Handle window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isMenuOpen) {
      mobileMenuToggle.click();
    }
  });
}
