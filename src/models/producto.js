const { Schema, model } = require('mongoose');

const productoSchema = new Schema(
    {
        nombre: { type: String, require: true, length: 50, trim: true },
        precio: { type: Number, require: true, length: 5 },
        categoria: { type: String, require: true, length: 10 },
        imagen: {
            public_id: String,
            url: String
        },
        descripcion: { type: String, require: true, length: 200, trim: true },
        disponible: { type: Boolean, require: true },
    },
    {
        timestamps: true
    }
);


module.exports = model('Producto', productoSchema);
