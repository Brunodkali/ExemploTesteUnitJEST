const request = require("supertest");
const server = require('./index.js');

describe('Teste de criação de usuários', () => {
    it('Criar usuário', async () => {
        const response = await request(server)
        .post('/create')
        .send({
            email: "bruno@123.com",
            name: "Bruno",
        });
        expect(response.status).toBe(200);
    });
});