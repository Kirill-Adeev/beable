import Page from './page'

export class HomePage extends Page {

    get feedbackForm() { return $('form') }
    get formFirstName() { return this.feedbackForm.$('input[name="first-name"]') }
    get formLastName() { return this.feedbackForm.$('input[name="last-name"]') }
    get formTitle() { return this.feedbackForm.$('input[name="title"]') }
    get formDistrict() { return this.feedbackForm.$('input[name="district"]') }
    get formEmail() { return this.feedbackForm.$('input[name="email"]') }
    get formPhone() { return this.feedbackForm.$('input[name="phone"]') }
    get formMessage() { return this.feedbackForm.$('textarea[name="message"]') }
    get submitButton() { return this.feedbackForm.$('#submit') }
    get formValidationErrors() { return this.feedbackForm.$('.wpcf7-validation-errors') }

    submitFeedbackForm() {
        browser.waitUntil(() => this.submitButton.isClickable(), 5000, 'element is not clickable after 5 seconds');
        this.submitButton.click();
    }

}

export default new HomePage()
