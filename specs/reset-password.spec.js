import LoginPage from '../pageobjects/login.page';

export const userIncorrectPasswords = ['incorrect password 1', "incorrect password 2"];

// Case #1
describe('First time user temporary password reset', () => {

    let passwordRetries = 0;

    it('should navigate to beable.com', () => {
        LoginPage.open('/');
        LoginPage.locationToBe('/');
    });

    it('should login with provided credentials', () => {
        LoginPage.loginFormDisplayed().then(() => {
            expect(this.loginForm.isDisplayed()).to.equal(true, 'Login form is not displayed!!!!!');
        });
        //LoginPage.loginFormDisplayed();
        LoginPage.username.addValue('registered email');
        LoginPage.password.addValue('temporary password');
        LoginPage.submitLoginForm();
        //browser.pause(10000);
        expect(LoginPage.loginErrors.isDisplayed()).to.equal(true);
    });

    /*
    it('should see reset password modal', () => {
        LoginPage.resetPasswordModal.waitForDisplayed(3000);
        LoginPage.resetPasswordModal.isDisplayed().should.be.equal(true)
    })

    // rerun this test twice, need to test it but will be useful
    it('set incorrect password and get validation error on submit', () => {
        LoginPage.newPasswordInput.clearValue()
        LoginPage.newPasswordInput.addValue(userIncorrectPasswords[passwordRetries])
        LoginPage.submitResetPasswordForm()
        LoginPage.resetPasswordErrorsDisplayed()
        LoginPage.resetPasswordErrorTextToBe('Password must be at least 8 characters long, include at least one number and special character', 5000)
        passwordRetries++
    }, 1)

    it('set correct password and log in with redirect to assessment page', () => {
        LoginPage.authTokenCookieExists.should.be.equal(false)
        LoginPage.newPasswordInput.clearValue()
        LoginPage.newPasswordInput.addValue('<the correct permanent password>')
        LoginPage.submitResetPasswordForm()
        LoginPage.resetPasswordErrorsAreNotDisplayed()
        browser.pause(1000)
        LoginPage.authTokenCookieExists.should.be.equal(true)
        LoginPage.locationToBe('/assessment', 5000)
    })
    */
});

// can be used any framework mocha, jasmine, cucumber - anything you like
// with page object or not
// with validation in spec file or at page object file
// with async await pattern or not
//
