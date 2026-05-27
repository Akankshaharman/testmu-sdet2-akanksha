const { test, expect } = require('@playwright/test');

const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const UserApi = require('../../api/userApi');

const api = new UserApi();

test('API + UI Integration Flow', async ({ page }) => {

    // API Step
    const response = await api.createUser({
        name: 'Akanksha',
        job: 'QA'
    });

    expect(response.status).toBe(201);

    // UI Step
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await dashboardPage.verifyDashboardLoaded();
});