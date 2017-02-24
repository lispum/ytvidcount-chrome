function ytvidcount() {
    if ("/watch" !== window.location.pathname) return false;
    var anchor = document.createElement("a"),
        channelId = document.querySelector("meta[itemprop=channelId]").getAttribute("content"),
        username = document.querySelector("a.yt-user-photo").href,
        xhr = new XMLHttpRequest;
    anchor.style = "color:#999;display:inline-block;font-size:11px;margin-top:1px;", 
    anchor.className = "yt-channel-video-count spf-link", 
    anchor.href = username + "/videos", document.querySelector(".yt-user-info").append(e), 

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var response = JSON.parse(o.responseText);
            anchor.innerHTML = "&middot; " + response.items[0].statistics.videoCount + " videos"
        }
    }, 
    xhr.open("GET", "https://content.googleapis.com/youtube/v3/channels?id=" + channelId + "&part=statistics&key="+window.apikey, true), 
    xhr.send()
}
ytvidcount();

window.addEventListener("spfdone", ytvidcount);