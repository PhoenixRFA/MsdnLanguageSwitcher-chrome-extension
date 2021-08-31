//const port = chrome.runtime.connect();

chrome.commands.onCommand.addListener(function(command) {
  if (command == 'toggle-language'){
	  toggle();
  }
});

chrome.browserAction.onClicked.addListener(function(){
	toggle();
});

function toggle(){
	chrome.tabs.query(
		{active: true, currentWindow: true},
		function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, 'toggle-language');
		}
	);
}