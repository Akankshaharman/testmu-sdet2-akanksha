const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');

test('Dashboard Navigation Test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await dashboardPage.verifyDashboardLoaded();

    await dashboardPage.clickCart();

    await expect(page).toHaveURL(/cart/);
});