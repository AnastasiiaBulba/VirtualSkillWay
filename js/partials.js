// Partials Loader - loads header and footer from separate files
export function loadPartials() {
  loadHeader();
  loadFooter();
}

async function loadHeader() {
  try {
    const response = await fetch("./unique_partials/header.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const headerHtml = await response.text();
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      headerContainer.innerHTML = headerHtml;

      // Set active navigation based on current page
      setActiveNavigation();
    }
  } catch (error) {
    console.error("Error loading header:", error);
    // Fallback header
    const headerContainer = document.getElementById("header-container");
    if (headerContainer) {
      headerContainer.innerHTML = `
                <div id="cookie-bar" class="cookie-bar">
                    <div class="cookie-content">
                        <p>🌊 We use cookies to enhance your underwater gaming experience. By continuing to use this site, you consent to our use of cookies.</p>
                        <div class="cookie-buttons">
                            <button id="accept-cookies" class="btn-primary">Accept</button>
                            <a href="./somesea-cookies.html" class="btn-secondary">Learn More</a>
                        </div>
                    </div>
                </div>
                <header id="header" class="header">
                    <div class="container">
                        <div class="header-content">
                            <div class="logo">
                                <a href="./" class="logo-link">
                                    <span class="logo-text">VirtualSkillWay.com</span>
                                </a>
                            </div>
                            <nav class="nav">
                                <ul class="nav-list">
                                    <li class="nav-item"><a href="./" class="nav-link" id="nav-home">Dive In</a></li>
                                            <li class="nav-item"><a href="./somesea-news.html" class="nav-link" id="nav-news">Ocean Updates</a></li>
        <li class="nav-item"><a href="./somesea-contacts.html" class="nav-link" id="nav-contact">Contact Crew</a></li>
                                </ul>
                            </nav>
                            <button class="mobile-menu-toggle" id="mobile-menu-toggle">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </button>
                        </div>
                    </div>
                </header>
            `;
      setActiveNavigation();
    }
  }
}

async function loadFooter() {
  try {
    const response = await fetch("./unique_partials/footer.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const footerHtml = await response.text();
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.innerHTML = footerHtml;
    }
  } catch (error) {
    console.error("Error loading footer:", error);
    // Fallback footer
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.innerHTML = `
                <footer id="footer" class="footer">
                    <div class="container">
                        <div class="footer-content">
                            <div class="footer-section">
                                <h3 class="footer-title">Contact Us</h3>
                                <div class="contact-info">
                                    <p class="contact-item" id="footer-email">Email: contact@virtualskillway.com</p>
                                    <p class="contact-item" id="footer-phone">Phone: +61 7 000 444</p>
                                    <p class="contact-item" id="footer-address">Address: 78 Reef Street, Port Douglas QLD 4877, Australia</p>
                                </div>
                            </div>
                            <div class="footer-section">
                                <h3 class="footer-title">Legal</h3>
                                <ul class="footer-links">
                                                    <li><a href="./somesea-cookies.html" class="footer-link">Cookie Policy</a></li>
                <li><a href="./somesea-privacy.html" class="footer-link">Privacy Policy</a></li>
                <li><a href="./somesea-disclaimer.html" class="footer-link">Disclaimer</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-bottom">
                            <p class="copyright">&copy; <span id="current-year">2024</span> VirtualSkillWay.com. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            `;
    }
  }
}

function setActiveNavigation() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  switch (currentPage) {
    case "home":
      const homeLink = document.getElementById("nav-home");
      if (homeLink) homeLink.classList.add("active");
      break;
    case "news":
      const newsLink = document.getElementById("nav-news");
      if (newsLink) newsLink.classList.add("active");
      break;
    case "contact":
      const contactLink = document.getElementById("nav-contact");
      if (contactLink) contactLink.classList.add("active");
      break;
  }
}

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("somesea-news.html")) return "news";
  if (path.includes("somesea-contacts.html")) return "contact";
  return "home";
}
