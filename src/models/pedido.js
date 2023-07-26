const { Schema, model } = require('mongoose');

const pedidoSchema = new Schema(
    {
        fecha: { type: Date, require: true},
        hora: { type: Date, require: true},
        cantidad: { type: Number, require: true, length: 5 },
        total: { type: Number, require: true, length: 6 }
    },
    {
        timestamps: true
    }
);


module.exports = model('Pedido', pedidoSchema);
