chrome.webNavigation.onCompleted.addListener(({ tabId, frameId }) => {
  if (frameId !== 0) return;
  console.log(tabId, frameId);
  chrome.scripting.executeScript({
    target: {
      tabId,
    },
    function: newPageLoad,
  });
});
const newPageLoad = async () => {
  if (location.href.includes("/www.facebook.com")) {
    // Hide Facebook Watch Video Icon
    const hideWatchIcon = document.querySelector(".x1i64zmx");
    hideWatchIcon.style.display = "none";
  }
};
