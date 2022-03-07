chrome.cookies.getAll({}, function (cookies) {
  chrome.storage.local.set({ cookies: cookies });
});
