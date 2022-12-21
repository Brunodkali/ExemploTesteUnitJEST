const express = require('express');
const app = express();
const port = process.env.port || 3000;
const cors = require('cors');
const router = express.Router();
const Usuario = require('./models/userModel.js');

app.use(express.json());
app.use(cors());

app.use(router.post('/create', async (req, res) => {
    const { name, email } = req.body;
    
    if(email == null || name == null) {
        return res.status(400).send({ error: "Dados insuficientes" });
    }else {
        try {
            const addUser = await Usuario.create({
                name: name,
                email: email,
              });
            return res.status(200).send({ user: name });
        }catch(err) {
            return res.status(500).send({ error: err });
        }
    }
}));

app.use(router.get('/listar', async (req, res) => { 
    try {
        const arrayUser = []
        const listUser = await Usuario.find({});

        for (let i = 0; i < listUser.length; i++) {
            const nameUser = listUser[i]['name'];
            const emailUser = listUser[i]['email'];
            const objUser = {
                name: nameUser,
                email: emailUser
            }
            arrayUser.push(objUser)
        }
        return res.status(200).json({ arrayUser });
    }catch(err) {
        return res.status(404).send({ error: err });
    }  
}));

app.use(router.post('/listarEspecifico', async (req, res) => { 
    const { name, email } = req.body;

    try {
        const listUser = await Usuario.find({
            name: name,
            email: email
        });
        console.log(listUser)
        return res.status(200).json({ listUser });
    }catch(err) {
        return res.status(404).send({ error: err });
    }
    
}));

const server = app.listen(port, () => {
    console.log(`Servidor Rodando na porta: ${port}`);
});

module.exports = server;