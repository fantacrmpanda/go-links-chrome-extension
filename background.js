chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: 1,
                priority: 1,
                condition: {
                    regexFilter: "^https?://go/(.*)",
                    resourceTypes: ["main_frame"]
                },
                action: {
                    type: "redirect",
                    redirect: {
                        regexSubstitution: "http://go.lovecrm.ai/\\1"
                    }
                }
            }
        ],
        removeRuleIds: [1] // Clean up old rules if necessary
    });
});

