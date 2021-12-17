module.exports = {
    "Check selector": browser => {
        
        browser.url("https://en.wikipedia.org/wiki/Main_Page")
        browser.pause(1 * 500)
        browser.sendKeys('#searchInput[type=search]', ["Friedrich Nietzsche", browser.Keys.ENTER])
        browser.pause(1*500)
        browser.click('#mw-content-text > div.searchresults.mw-searchresults-has-iw > p.mw-search-exists > b > a')
        browser.pause(1*500)
        browser.click('#toc > ul > li.toclevel-1.tocsection-8 > ul > li.toclevel-2.tocsection-13 > a > span.toctext')
        browser.pause(3*1000)

    }
}