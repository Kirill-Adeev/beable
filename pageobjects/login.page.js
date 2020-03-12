import Page from './page'

export class LoginPage extends Page {
    get timeOut() {return};
    get loginForm() { return $('#loginform') }
    // reusing selectors
    get username () { return this.loginForm.$('[name=user_name]') }
    get password () { return this.loginForm.$('#user_pass') }
    get submitButton () { return $('#loginform #wp-submit') }
    get loginErrors () { return this.loginForm.$('#loginErrors') }

    get resetPasswordModal() { return $('#resetPasswordModal') }
    // also chaining selectors
    get newPasswordInput() { return $('#resetPasswordModal').$('#newPasswordInput') }
    get resetPasswordButton() { return $('#resetPasswordModal button[type=submit]') }
    get resetPasswordErrors() { return this.resetPasswordModal.$('#resetPasswordErrors') }

    submitLoginForm() {
        this.submitButton.waitAndClick()
    }

    submitResetPasswordForm() {
        this.resetPasswordButton.click()
    }

    loginFormDisplayed() {

        return browser.waitUntil(
            () => this.loginForm.isDisplayed(),
            5000,
            '---Login form is not displayed')


    }

    // isDisplayed with wait condition
    resetPasswordErrorsDisplayed() {
        browser.waitUntil(() => {
            return this.resetPasswordErrors.isDisplayed()
        }, 5000, 'expected reset password errors to be displayed');
    }

    // and verifying text at the element
    resetPasswordErrorTextToBe(text, timeOut = 5000) {
        browser.waitUntil(() => {
            return this.resetPasswordErrors.getText() === text
        }, timeOut, 'error text is not equals to "'+ text +'"')
    }

    // or a combination of 2 above methods with default timeOut value
    resetPasswordIsDisplaedWithText(text, timeOut = 5000) {
        browser.waitUntil(() => {
            return this.resetPasswordErrors.isDisplayed() && this.resetPasswordErrors.getText() === text
        }, timeOut, 'error text is not displayed or not equals to "'+ text +'"')
    }

    resetPasswordErrorsAreNotDisplayed() {
        browser.waitUntil(() => {
            return !this.resetPasswordErrors.isDisplayed()
        }, 5000, 'expected reset password errors to be not displayed');
    }
}

export default new LoginPage()
