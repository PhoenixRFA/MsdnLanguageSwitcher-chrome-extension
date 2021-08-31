chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request == "toggle-language"){
		const chbx = document.getElementById('language-toggle');
		chbx.click();
    }
	sendResponse();
  });