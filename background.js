// background.js
let tabId;
let startTime = 0;

chrome.tabs.onActivated.addListener(function (activeInfo) {
  if (tabId !== activeInfo.tabId) {
    // Switched to a new tab
    tabId = activeInfo.tabId;
    startTime = Date.now();
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.active) {
    // Page has loaded in the active tab
    startTime = Date.now();
  }
});

chrome.runtime.onInstalled.addListener(function () {
  // Reset total time on extension installation
  chrome.storage.local.set({ totalTime: 0 });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getTotalTime") {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // Convert to seconds
    sendResponse({ totalTime: elapsedTime });
  }
});
