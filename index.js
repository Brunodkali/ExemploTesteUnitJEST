const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const router = express.Router();
const Usuario = require('./models/userModel.js');

app.use(express.json());
app.use(cors());

app.use(router.post('/create', async (req, res) => {
    const { email, name } = req.body;
    
    if(email == null || name == null) {
        return res.status(400).send({ error: "Dados insuficientes" });
    }else {
        try {
            const newUser = {
                name: name,
                email: email
            };
            const addUser = await Usuario.create({
                name: name,
                email: email
              });
                return res.status(200).send({ user: newUser });
            }
        catch(err) {
            return res.status(500).send({ error: err });
        }
    }
    }));

const server = app.listen(port, () => {
    console.log(`Servidor Rodando na porta: ${port}`);
});

module.exports = server;