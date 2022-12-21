const request = require("supertest");
const server = require('./index.js');
const mongoose = require('mongoose');
const MOONGO_URL = 'mongodb://127.0.0.1/testesJest';

describe('Teste de criação de usuários', () => {
    beforeAll(async()=> {
        mongoose.set("strictQuery", true);
        await mongoose.connect(MOONGO_URL);
    });

    it('Criar usuário', async () => {
        const response = await request(server)
        .post('/create')
        .send({
            name: "Thiggas",
            email: "thigas@gmail.com"
        });
        expect(response.status).toBe(200);
    });
});