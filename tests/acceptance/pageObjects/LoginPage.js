class LoginPage {
    constructor() {
        //define selectors
        this.usernameSelector = '#email'
        this.passwordSelector = '#password'
        this.loginButtonSelector = '//button[@type="submit"]'
        this.messageSelector = '//p[@class="error-message"]'

        //launch url
        this.baseUrl = 'http://localhost:8080/'
        this.loginUrl = this.baseUrl+'login'
        this.homePageUrl = this.baseUrl
    }

    async gotoLoginPage() {
        await page.goto(this.loginUrl)
    }

    async login(username, password) {
        await page.fill(this.usernameSelector, username)
        await page.fill(this.passwordSelector, password)
        await page.click(this.loginButtonSelector)
    }

}
module.exports = LoginPage