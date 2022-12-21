const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const router = express.Router();
const mongoose = require('mongoose');
const MOONGO_URL = 'mongodb://127.0.0.1/testeJest';
mongoose.connect(MOONGO_URL);

app.use(express.json());
app.use(cors());

app.use(router.post('/create', (req, res) => {
    const { email, name } = req.body;
    
    if(email == null || name == null) {
        return res.status(400).send({ error: "Dados insuficientes" });
    }else {
        try {
            const user = {
                email: email,
                name: name,
            };
                return res.status(200).send({ user: user });
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