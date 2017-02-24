chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.apikey) {
		chrome.storage.sync.get('apikey', function(i){
			sendResponse({apikey: i.apikey});
		});
		return true;
	}
	return false;
});