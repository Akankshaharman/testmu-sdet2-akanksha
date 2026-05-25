const { test, expect } = require('@playwright/test');

const UserApi = require('../../api/userApi');

const api = new UserApi();

test('Create User API Test', async () => {

    const payload = {
        name: 'Akanksha',
        job: 'QA Engineer'
    };

    const response = await api.createUser(payload);

    expect(response.status).toBe(201);

    console.log(response.data);
});

test('Update User API Test', async () => {

    const payload = {
        name: 'Akanksha Updated',
        job: 'Senior QA'
    };

    const response = await api.updateUser(2, payload);

    expect(response.status).toBe(200);

    console.log(response.data);
});

test('Delete User API Test', async () => {

    const response = await api.deleteUser(2);

    expect(response.status).toBe(200);
});