let deltaCommands = {
    fillOutAndVerify: function (data) {
        this
            .click('@fromAirport')
            .setValue('@cityInput', data.from)
            .click('@searchExample')
            .click('@toAirport')
            .setValue('@cityInput', data.to)
            .click('@searchExample')
            .click('@tripType')
            .click(data.trip)
            .click('@departReturn')
            .useXpath()
            .click(`//a[@aria-label="${data.departDate}"]`)
            .click(`//a[@aria-label="${data.returnDate}"]`)
            .click('@doneButton')
            .click('@passengerList')
            .click(data.passengers)
            .pause(500)
            //otherstuff
            .click('@advSearch')
            .click(data.price)
            .click('@fareList')
            .click(data.fare)
            .verify.containsText('@fareList', data.fareVer)
            .verify.containsText('@fromAirport', data.from)
            .verify.containsText('@toAirport', data.to)
            .click('@submitButton')
            .pause(5000)
            .verify.containsText('@selectedDate', data.priceVer)
        return this
    }

}
module.exports = {
    url: 'https://www.delta.com',
    commands: [deltaCommands],
    var: flight1 = [
        {
            from: 'SGU',
            to: 'SLC',
            trip: '@roundTrip',
            departDate: '26 September 2019, Thursday',
            returnDate: '30 September 2019, Monday',
            passengers: '@passengers2',
            price: '@miles',
            priceVer: "MILES",
            fare: '@mainCabin',
            fareVer: "Main Cabin"

        }],
    elements: {
        //general elements
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
        tripType: {
            selector: '//span[@aria-owns="selectTripType-desc"]',
            locateStrategy: 'xpath'
        },
        departReturn: {
            selector: '//div[@id="input_departureDate_1"]',
            locateStrategy: 'xpath'
        },
        doneButton: {
            selector: '//button[@class="donebutton"]',
            locateStrategy: 'xpath'
        },
        passengerList: {
            selector: '//span[@aria-owns="passengers-desc"]',
            locateStrategy: 'xpath'
        },
        advSearch: {
            selector: '//a[@id="adv-search"]',
            locateStrategy: 'xpath'
        },
        fareList: {
            selector: '//span[@aria-owns="faresFor-desc"]',
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: '//button[@id="btnSubmit"]',
            locateStrategy: 'xpath'
        },
        selectedDate: {
            selector: '//td[@class="forHover selectedCell ng-star-inserted"]',
            locateStrategy: 'xpath'
        },


        //flight data selectors
        passengers2: {
            selector: '//li[@id="ui-list-passengers1"]',
            locateStrategy: 'xpath'
        },
        basicEconomy: {
            selector: '//li[@id="ui-list-faresFor0"]',
            locateStrategy: 'xpath'
        },
        mainCabin: {
            selector: '//li[@id="ui-list-faresFor1"]',
            locateStrategy: 'xpath'
        },
        firstClass: {
            selector: '//li[@id="ui-list-faresFor3"]',
            locateStrategy: 'xpath'
        },
        miles: {
            selector: '//label[@id="milesLabel"]',
            locateStrategy: 'xpath'
        },
        money: {
            selector: '//label[@id="moneyLabel"]',
            locateStrategy: 'xpath'
        },
        roundTrip: {
            selector: '//li[@id="ui-list-selectTripType0"]',
            locateStrategy: 'xpath'
        },


        
        element: {
            selector: 'xpathselector',
            locateStrategy: 'xpath'
        },


    }
}

