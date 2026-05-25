const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const users = require('../../data/users.json');

test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
    users[0].username,
    users[0].password
);

    await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

   await loginPage.login(
    users[1].username,
    users[1].password
);

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();
});
test('Empty Login Validation Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.clickLoginButton();

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();
});