const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const usuarioSchema = new Schema(
    {
        nombre: { type: String, require: true, length: 50 },
        password: { type: String, require: true, length: 50 },
        tipo: { type: String, require: true, length: 10 },
        estado: { type: Boolean, require: true },

    },
    {
        timestamps: true
    }
);

usuarioSchema.statics.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

usuarioSchema.methods.matchPassword = async password => {
    return await bcrypt.compare(password, this.password);
}


module.exports = model('Usuario', usuarioSchema);

