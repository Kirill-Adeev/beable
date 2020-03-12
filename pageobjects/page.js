
export default class Page {

    get location() {
        return browser.getUrl();
    }

    get authTokenCookieExists() {
        return browser.getCookies(['authtoken']).length > 0
    }

    open (url) {
        browser.url(url)
    }

    // timeOut without default value
    locationToBe(path) {
        expect(this.location).to.equal(browser.config.baseUrl + path, 'Location is not equals to ' + browser.config.baseUrl + path);
    }

    element(element) {
        return $(element)
    }

    // any page click on element with wait to be clickable and error reporting if not clickable within timeOut
    clickOnElement(element, timeOut = 5000) {
        browser.waitUntil(() => {
            return browser.$(element).isClickable()
        }, timeOut, 'element is not clickable after '+ timeOut +' seconds');
        browser.$(element).click();
    }

}
