const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    }
});

module.exports = mongoose.model("usuarios", userSchema);