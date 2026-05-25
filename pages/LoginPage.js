class LoginPage {

    constructor(page) {

        this.page = page;

        this.username =
            '[data-test="username"]';

        this.password =
            '[data-test="password"]';

        this.loginButton =
            '[data-test="login-button"]';
    }

    async navigateToLoginPage() {

        await this.page.goto(
            'https://www.saucedemo.com'
        );
    }

  async login(username, password) {

    await this.page.fill(
        this.username,
        username
    );

    await this.page.fill(
        this.password,
        password
    );

    await this.page.waitForSelector(
        this.loginButton,
        { state: 'visible' }
    );

    await this.page.locator(
        this.loginButton
    ).click();
}
}

module.exports = LoginPage;