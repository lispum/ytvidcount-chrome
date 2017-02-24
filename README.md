# Video Counter for YouTube
Show author's video count with a direct link to all videos on the YouTube watch page. Without having to hover over the name.

![What does YouTube Video Counter do on the watch page](https://cloud.githubusercontent.com/assets/25948390/23295691/40e15fe2-fa72-11e6-94b6-c25203028dd1.png)

## Installation and Configuration
On your own responsibility.

This is an unpacked, unsigned chrome extension.
1. Installing the extension
  a. Download the zip with the [newest release](https://github.com/lispum/ytvidcount-chrome/releases), alternatively the zip of the whole repository.
  b. Unpack it to somewhere it can stay for long time.
  c. In `chrome://extensions` check *Developer mode* checkbox at the top ![Developer mode](https://cloud.githubusercontent.com/assets/25948390/23296754/cdb330cc-fa76-11e6-85bf-92db9b5a2796.png)
  d. Click the *Load unpacked extension* button
  e. Choose the `dist` folder from the unpacked zip. For example `./Downloads/YTVidCount-Chrome-master/dist/`
2. Configuring - API Key
  a. Sign in to [`https://console.developers.google.com/`](https://console.developers.google.com/)
  b. Create a new project or use an exisitng one
  c. Enable `Youtube Data API`
  d. Create an API Key with no restrictions
  e. Paste your newly created API key into extension options and save.

A colorful screenshotfull instruction is to follow soon

## Plans
I plan to find a better solution to the API problem, suggestions welcome. 
