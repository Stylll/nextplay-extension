const VIDEOSKEY = "videos";

chrome.runtime.onInstalled.addListener(function() {
  const videoList = [
    {
      title: "Ladipoe - Revival",
      link: "https://www.youtube.com/watch?v=sXB2QNNq8xw"
    },
    {
      title: "Tekno - Agege",
      link: "https://www.youtube.com/watch?v=5j6J_CY_tEg"
    },
    {
      title: "Ladipoe - Lemme Know",
      link: "https://www.youtube.com/watch?v=2XZIeYoLrQc"
    }
  ];

  chrome.storage.sync.set({ [VIDEOSKEY]: videoList}, function() {
    console.log("Storage Initialized");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: "https://*.youtube.com/*"}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
