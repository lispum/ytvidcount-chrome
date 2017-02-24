//This is the main function - payload, this is the main logic executed.
//All the content_script, background helpers are to help inject this payload like a normal inline JavaScript without chrome security restrictions while still maintaing a roundabout access to chrome.* APIs

//Function name is chosen to avoid any potential further conflict
function ytvidcount() {
    //making sure we are on a /watch* page, in any other case - function is not executed at all (saves quota)
    if ("/watch" !== window.location.pathname) return false;
    
    //set up variables
    //main anchor element <a href="/user/USERNAME/videos" class="yt-channel-video-count spf-link">100 videos</a>
    var anchor = document.createElement("a"),
        //channel id found in meta header to be used in the API call
        channelId = document.querySelector("meta[itemprop=channelId]").getAttribute("content"),
        //canonical username just to make the video list link prettier
        username = document.querySelector("a.yt-user-photo").href,
        //set up for AJAX API request
        xhr = new XMLHttpRequest;

    //styling of the anchor
    anchor.style = "color:#999;display:inline-block;font-size:11px;margin-top:1px;",
    //adding classes also spf-link to make it spf-friendly
    anchor.className = "yt-channel-video-count spf-link",
    //construction of the destination url - "/user/USERNAME/videos" 
    anchor.href = username + "/videos", document.querySelector(".yt-user-info").append(e), 

    //the ajax call for the number of videos of the particular channel
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //returned are some channel stats in JSON
            var response = JSON.parse(o.responseText);
            //the number of videos is under response.items[0].statistics.videoCount which set as anchor text alongside a dot and a string 'videos'
            anchor.innerHTML = "&middot; " + response.items[0].statistics.videoCount + " videos"
        }
    }, 
    //the actual AJAX call being executed with the apikey retrieved from chrome.storage.sync which is saved by options. 
    //In production this whole script is in a content_script so the apikey is never actaully written to winow.apikey
    //But to portray the apikey in sourcecode i used some old code that wrote apikey to window.apikey in a content_script and then retrieved it in the injected payload script.
    xhr.open("GET", "https://content.googleapis.com/youtube/v3/channels?id=" + channelId + "&part=statistics&key="+window.apikey, true), 
    xhr.send()
}
//First call if we landed on a watch page
ytvidcount();


//YouTube uses SPF (spfjs - github.com/youtube/spfjs) which is their own HTML5 History API library that reloads only the changing parts of a webpage, because of the way our payload works it must be called everytime any change of location happens - a spf reload
window.addEventListener("spfdone", ytvidcount);