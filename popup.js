document.getElementById('activateBtn').addEventListener('click', function() {
    console.log("************sdfsadf******");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
        });
    });
});
document.getElementById('deactivateBtn').addEventListener('click', function() {
    console.log("###############");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['nocontent.js']
        });
    });
});
