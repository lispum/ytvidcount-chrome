document.addEventListener("DOMContentLoaded", function(){
		chrome.storage.sync.get('apikey', function(i) {
		    document.getElementById('apikey').value = i.apikey;
		  });
	});
document.querySelector("#save").addEventListener("click", function(){
	var apikey = document.getElementById("apikey").value,
		btn = this;
	chrome.storage.sync.set({
	    apikey: apikey
	  }, function() {
	    var status = document.getElementById('status');
	    status.textContent = 'Options saved.';
	    btn.disabled = "disabled";
	    setTimeout(function() {
	      status.textContent = '';
	      btn.removeAttribute("disabled");
	    }, 1500);
	  });
});