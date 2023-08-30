const { Schema, model } = require('mongoose');

const pedidoSchema = new Schema(
    {
        tiempoentrega: { type: Number, require: true },
        completado: { type: Boolean, require: true },
        total: { type: Number, require: true },
        orden: { type: Array, require: true }
    },
    {
        timestamps: true
    }
);


module.exports = model('Pedido', pedidoSchema);
