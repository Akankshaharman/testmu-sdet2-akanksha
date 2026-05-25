const { test, expect } = require('@playwright/test');

const UserApi = require('../../api/userApi');

test('Get Users API Test', async () => {

    const api = new UserApi();

    const response = await api.getUsers();

    expect(response.status).toBe(200);
});