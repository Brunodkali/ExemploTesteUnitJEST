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
            const addUser = await Usuario.create({
                name: name,
                email: email,
              });

                req.userId = name;
                return res.status(200).send({ user: name });
            }
        catch(err) {
            return res.status(500).send({ error: err });
        }
    }
}));

app.use(router.get('/listar', async (req, res) => { 
    try {
        res.status(200).json(
            [
                {id:1, nome:'Luiz'},
                {id:2, nome:'Bruno'},
                {id:3, nome:'Débora'},
                {id:4, nome:'Carlos'}
            ]
        );
    }catch(err) {
        return res.status(404).send({ error: err });
    }
    
}));

const server = app.listen(port, () => {
    console.log(`Servidor Rodando na porta: ${port}`);
});

module.exports = server;