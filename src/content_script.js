var	e = document.createElement('script'),
 	f = document.createElement('script');

//One of the elements is the payload injected directly into youtube DOM to bypass isolated worlds of the content script
e.src = chrome.extension.getURL('vidcount.js');

//Get the user-inputer API-key from Options via a background script message
chrome.runtime.sendMessage({apikey: true}, function(response) {

	//Input the API key on the page for the script to access
	f.innerHTML = "window.ytvidcountapikey='"+response.apikey+"';";

	//Append both the vidcount script and the apikey to the document body
	document.body.appendChild(f);
	document.body.appendChild(e);
 });