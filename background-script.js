function openOverview() {
    browser.tabs.create({
        url: '/app/home.html',
    })
}

// Open the overview when the extension's button is clicked
browser.browserAction.onClicked.addListener(() => {
    openOverview()
})

browser.commands.onCommand.addListener(command => {
    if (command === "openOverview") {
        openOverview()
    }
})
