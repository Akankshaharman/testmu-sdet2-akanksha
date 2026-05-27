const axios = require('axios');

class UserApi {

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';

        this.client = axios.create({
            baseURL: this.baseUrl,
            timeout: 5000,
            validateStatus: () => true
        });
    }

    async getUsers() {
    const start = Date.now();

    const response = await this.client.get('/users');

    return {
        ...response,
        duration: Date.now() - start
    };
}

    createUser(payload) {
        return this.client.post('/users', payload);
    }

    updateUser(id, payload) {
        return this.client.put(`/users/${id}`, payload);
    }

    deleteUser(id) {
        return this.client.delete(`/users/${id}`);
    }

    async getInvalidUser() {
    const start = Date.now();

    const response = await this.client.get('/users/999999');

    return {
        ...response,
        duration: Date.now() - start
    };
}
}

module.exports = UserApi;