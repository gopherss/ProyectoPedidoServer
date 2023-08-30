const { Schema, model } = require('mongoose');

const clienteSchema = new Schema(
    {
        nombre: { type: String, require: true, length: 50 },
        correo: { type: String, require: true, length: 80 },
        password: { type: String, require: true, length: 100 }
    },
    {
        timestamps: true
    }
);


module.exports = model('Cliente', clienteSchema);
