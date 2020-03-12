import Page from './page'

class AssessmentPage extends Page {
    get listOfQuestions () { return $$('#questions div') }
    get loadedPage () { return $('#questions') }

    open () {
        super.open('assessment')
    }
}

export default new AssessmentPage()
