const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');

test('Valid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page).toHaveURL(/inventory/);
});

test('Invalid Login Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'locked_out_user',
        'wrong_password'
    );

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();
});