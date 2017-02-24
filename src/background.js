//Listen for incoming messages, specifically one from the content_script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.apikey) {
		//retrieve the api key from storage
		chrome.storage.sync.get('apikey', function(i){
			sendResponse({apikey: i.apikey});
		});
		return true;
	}
	return false;
});