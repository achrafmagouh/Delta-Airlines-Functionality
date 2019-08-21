let delta = {}
module.exports = {
    beforeEach: browser => {
        delta = browser.page.deltaPage()
        delta.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Test1': browser =>{
        delta
            .click('@fromAirport')
            .setValue('@cityInput', 'SGU')
            .click('@searchExample')
            .verify.containsText('@fromAirport', 'SGU')
            .click('@toAirport')
            .setValue('@cityInput', 'SLC')
            .click('@searchExample')
            .verify.containsText('@toAirport', 'SLC')
            .pause(2000)
        
    }

}