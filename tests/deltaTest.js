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
        
    }

}