chrome.cookies.getAll({ domain: "development.anchor.fm", name: "anchorpw_s" }, function (cookies) {
  chrome.storage.sync.set({ cookies });
});
