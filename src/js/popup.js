/**
 * creates a dom element
 * @param {string} tag
 * @param {string} elementClass
 */
function createDOMElement(tag, elementClass) {
  const element = document.createElement(tag);
  element.classList.add(elementClass);

  return element;
}

/**
 * create a video element
 * @param {object} video
 */
function createVideoElement(video) {
  const videoItem = createDOMElement("div", "videoItem");
  const title = createDOMElement("p", "title");
  const link = createDOMElement("a", "link");

  title.innerText = video.title;
  link.innerText = video.link;
  link.setAttribute("href", video.link);

  videoItem.appendChild(title);
  videoItem.appendChild(link);

  return videoItem;
}

/**
 * loads video from storage
 */
function loadVideos () {
  const videoList = document.getElementById("videoList");

  chrome.storage.sync.get("videos", function (data) {
    if (!data.videos.length) {
      return;
    }

    for (let video of data.videos) {
      let videoElement = createVideoElement(video);
      videoList.appendChild(videoElement);
    }
  });
}

loadVideos();
