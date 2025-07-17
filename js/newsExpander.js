// News Expander functionality
export function initializeNewsExpander() {
  // Use event delegation for dynamically loaded content
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("read-more-btn")) {
      handleReadMoreClick(event.target);
    }
  });
}

function handleReadMoreClick(button) {
  // Get content from data attribute
  const content = button.getAttribute("data-content");
  if (!content) return;

  // Create modal overlay
  const modal = document.createElement("div");
  modal.className = "news-modal-overlay";
  modal.innerHTML = `
    <div class="news-modal">
      <div class="news-modal-header">
        <h3 class="news-modal-title">${
          button.closest(".news-card").querySelector(".news-title").textContent
        }</h3>
        <button class="news-modal-close">×</button>
      </div>
      <div class="news-modal-content">
        ${content}
      </div>
    </div>
  `;

  // Add modal to body
  document.body.appendChild(modal);

  // Show modal with animation
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);

  // Handle close button
  const closeBtn = modal.querySelector(".news-modal-close");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(modal);
    }, 300);
  });

  // Handle overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 300);
    }
  });
}

// Alternative implementation for static content
export function initializeStaticNewsExpander() {
  const readMoreButtons = document.querySelectorAll(".read-more-btn");

  readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get content from data attribute
      const content = this.getAttribute("data-content");
      if (!content) return;

      // Create modal overlay
      const modal = document.createElement("div");
      modal.className = "news-modal-overlay";
      modal.innerHTML = `
        <div class="news-modal">
          <div class="news-modal-header">
            <h3 class="news-modal-title">${
              this.closest(".news-card").querySelector(".news-title")
                .textContent
            }</h3>
            <button class="news-modal-close">×</button>
          </div>
          <div class="news-modal-content">
            ${content}
          </div>
        </div>
      `;

      // Add modal to body
      document.body.appendChild(modal);

      // Show modal with animation
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);

      // Handle close button
      const closeBtn = modal.querySelector(".news-modal-close");
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      });

      // Handle overlay click
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("show");
          setTimeout(() => {
            document.body.removeChild(modal);
          }, 300);
        }
      });
    });
  });
}
