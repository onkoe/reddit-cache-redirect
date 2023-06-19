asdf();

/// Doc comments? 
function asdf(): void {
    console.log("hey man whats up");
}

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let original_url = details.url;

        // make the new one
        let cached = "https://webcache.googleusercontent.com/search?q=cache:" + original_url;

        // triple equals wtf??? no compiler error btw
        if (original_url.search("comments") === (-1)) {
            return { redirectUrl: "https://web.archive.org/web/" + original_url };
        }
        return { redirectUrl: cached };

    },
    { urls: ["*://*.reddit.com/*"] },
    ["blocking"]
);
