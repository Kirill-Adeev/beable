import HomePage from '../pageobjects/home.page';

describe('Home page', () => {
    it('should navigate to beable.com', () => {
        HomePage.open('/');
        HomePage.locationToBe('/');
    });

    it('should submit feedback form and get validation errors', () => {
        HomePage.feedbackForm.waitForDisplayed();
        HomePage.submitFeedbackForm();
        HomePage.formValidationErrors.waitForDisplayed();
        expect(HomePage.formValidationErrors.isDisplayed()).to.equal(true, 'Validation errors are not displayed');
    });

    it('should set correct values to form and send it', () => {
        HomePage.formFirstName.setValue('Kirill');
        HomePage.formLastName.setValue('Adeev');
        HomePage.formTitle.setValue('Just title');
        HomePage.formDistrict.setValue('Moscow');
        HomePage.formEmail.setValue('kirill_smart@mail.ru');
        HomePage.formPhone.setValue('+79999999999');
        HomePage.formMessage.setValue('Just testing form');
        browser.pause(1000);
    })

});


