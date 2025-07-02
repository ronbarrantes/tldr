chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startClickToSummarize,
  });
});

function startClickToSummarize() {
  document.body.style.cursor = "grab";

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    document.body.style.cursor = "default";
    const text = e.target.innerText || e.target.textContent || "No text found";

    alert("TLDR:\n\n" + text.slice(0, 300));
    document.removeEventListener("click", onClick, true);
  };

  document.addEventListener("click", onClick, true);
}
