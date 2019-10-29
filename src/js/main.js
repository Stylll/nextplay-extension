
const videoElementClassName = "html5-main-video";
const VIDEOSKEY = "videos";

function load () {
  const videoElement = document.getElementsByClassName(videoElementClassName)[0];
  videoElement.onended = function () {
    chrome.storage.sync.get([VIDEOSKEY], function (data) {
      const videoList = data[VIDEOSKEY];
      if (!videoList.length) {
        return;
      }
      const video = videoList.shift();
      // update the storage with the new list
      chrome.storage.sync.set({[VIDEOSKEY]: videoList});

      // redirect to the next video
      window.location.href = video.link;

    });
  };
}

load();
