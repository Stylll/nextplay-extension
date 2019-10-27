chrome.runtime.onInstalled.addListener(function() {
  const videoList = [
    {
      title: "Davido - One in a million",
      link: "http://one-in-a-million.com"
    },
    {
      title: "Mavin - Looku Looku",
      link: "http://looku-looku.com"
    },
    {
      title: "Drake - Nice for what",
      link: "http://nice-for-what"
    }
  ];

  chrome.storage.sync.set({ videos: videoList}, function() {
    console.log("Storage Initialized");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: "/*"}
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
