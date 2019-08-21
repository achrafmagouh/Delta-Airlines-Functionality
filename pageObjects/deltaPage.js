module.exports = {
    url:'https://www.delta.com',
    elements: {
        fromAirport: {
            selector: '//a[@id="fromAirportName"]/span[@class="airport-code d-block"]',
            locateStrategy: 'xpath'
        },
        toAirport: {
            selector: '//a[@id="toAirportName"]/span[@class="airport-code d-block"]',
            locateStrategy: 'xpath'
        },
        cityInput: {
            selector: '//input[@id="search_input"]',
            locateStrategy: 'xpath'
        },
        searchExample: {
            selector: '//span[@class="airport-code col-sm-2 col-md-1 col-lg-2 col-xl-2 col-xxl-2 pl-0 pr-3"]',
            locateStrategy: 'xpath'
        },
        element: {
            selector: 'xpathselector',
            locateStrategy: 'xpath'
        },

    }
}

