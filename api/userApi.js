const axios = require('axios');

class UserApi {

    constructor() {
        this.baseUrl = 'https://jsonplaceholder.typicode.com';
    }

    // GET USERS
    async getUsers() {

        return await axios.get(
            `${this.baseUrl}/users`
        );
    }

    // CREATE USER
    async createUser(payload) {

        return await axios.post(
            `${this.baseUrl}/users`,
            payload
        );
    }

    // UPDATE USER
    async updateUser(id, payload) {

        return await axios.put(
            `${this.baseUrl}/users/${id}`,
            payload
        );
    }

    // DELETE USER
    async deleteUser(id) {

        return await axios.delete(
            `${this.baseUrl}/users/${id}`
        );
    }
}

module.exports = UserApi;