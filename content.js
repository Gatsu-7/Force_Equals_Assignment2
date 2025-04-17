function createWidget(data) {
    const widget = document.createElement("div");
    widget.className = "widget-container";
  
    widget.innerHTML = `
      <h3><strong>${data.companyName}</strong></h3>
      <label>Match Score: ${data.matchScore}</label>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${data.matchScore}%"></div>
      </div>
      <span class="status-tag ${data.accountStatus === "Target" ? "status-target" : "status-not-target"}">
        ${data.accountStatus}
      </span>
    `;
  
    widget.id = "linkedin-enhancer-widget"; 
    document.body.appendChild(widget);
  }
  
  function addToggleButton() {
    const button = document.createElement("button");
    button.className = "toggle-button";
    button.textContent = "Toggle Enhancer";
  
    document.body.appendChild(button);
  
    button.addEventListener("click", () => {
      const widget = document.getElementById("linkedin-enhancer-widget");
      if (widget) {
        const isVisible = widget.style.display !== "none";
        widget.style.display = isVisible ? "none" : "block";
        chrome.storage.local.set({ widgetVisible: !isVisible });
      }
    });
  }
  