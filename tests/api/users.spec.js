const { test, expect } = require('@playwright/test');
const UserApi = require('../../api/userApi');
const userSchema = require('../../schemas/userSchemas.json');
const { validateSchema } = require('../../utils/userValidator');

let api;

test.beforeEach(async ({ request }) => {
    api = new UserApi(request);
});

test('Get Users API Test', async () => {
    const response = await api.getUsers();

    expect(response.status).toBe(200);
});

test('Invalid user returns 404', async () => {
    const response = await api.getInvalidUser();

    expect(response.status).toBe(404);
});

test('GET Users - response time check', async () => {
    const start = Date.now();

    const response = await api.getUsers();

    const duration = Date.now() - start;

    expect(response.status).toBe(200);
    expect(duration).toBeLessThan(2000);
});

test('GET Users - Schema Validation', async () => {
    const response = await api.getUsers();

    expect(response.status).toBe(200);

    const body = response.data;

    validateSchema(userSchema, body[0]);
});