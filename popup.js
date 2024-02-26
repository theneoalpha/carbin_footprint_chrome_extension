// popup.js
document.addEventListener("DOMContentLoaded", function () {
    chrome.runtime.sendMessage({ action: "getTotalTime" }, function (response) {
      const timeElement = document.getElementById("time");
      const carbonElement = document.getElementById("carbon");
  
      timeElement.textContent = `${response.totalTime} seconds`;
  
      const carbon = calculateCarbonFootprint(response.totalTime);
      carbonElement.textContent = `${carbon.toFixed(2)} kgCO2`;
    });
  });
  
  // Calculate carbon footprint (a simple example)
  function calculateCarbonFootprint(time) {
    // This is a placeholder function; you should replace it with a more accurate calculation.
    // The formula here is just for illustration.
    return time / 3600; // Assuming 1 kgCO2 per hour of browsing
  }
  