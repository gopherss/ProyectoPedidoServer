const Producto = require('../models/producto');
const { subirImagen, eliminarImagen } = require('../libs/cloudinary');
const { remove } = require('fs-extra');

const crearProducto = async (req, res, next) => {
    try {
        const { nombre, precio, categoria, descripcion, disponible } = req.body;
        let imagen;

        if (req.files.imagen) {
            const resultado = await subirImagen(req.files.imagen.tempFilePath);
            await remove(req.files.imagen.tempFilePath);
            imagen = {
                url: resultado.secure_url,
                public_id: resultado.public_id
            }
        }

        const nuevoProducto = new Producto({
            nombre,
            precio,
            categoria,
            imagen,
            descripcion,
            disponible
        });

        await nuevoProducto.save();
        return res.json({ mensaje: 'producto registrado con exito!' });

    } catch (error) {
        return next(error);
    }
}

const obtenerProducto = async (req, res, next) => {
    try {
        const platillos = await Producto.find().hint({ $natural: -1 });
        return await res.json(platillos);
    } catch (error) {
        return next(error);
    }
}

const obtenerProductoDisponible = async (req, res, next) => {
    try {
        const platillos = await Producto.find({ disponible: { $eq: true } });
        return res.json(platillos)
    } catch (error) {
        return next(error);
    }
}

const editarDisponibilidad = async (req, res, next) => {
    try {
        const { _id, disponible } = req.body;
        const producto = await Producto.findById({ _id: _id });

        if (producto.disponible === disponible) {
            return res.sendStatus(304);
        } else {
            await Producto.findOneAndUpdate({ _id: _id }, { disponible }, { new: true });
            return res.json({ mensaje: producto.nombre });
        }
    } catch (error) {
        return next(error);
    }
}

const eliminarProducto = async (req, res, next) => {
    try {

        const productoEliminado = await Producto.findByIdAndDelete(req.params._id);
        if (!productoEliminado) return res.sendStatus(404);

        if (productoEliminado.imagen.public_id) {
            await eliminarImagen(productoEliminado.imagen.public_id);
        }

        return res.json({ mensaje: 'producto eliminado' });
    } catch (error) {
        return next(error);
    }

}


module.exports = {
    crearProducto,
    obtenerProducto,
    obtenerProductoDisponible,
    editarDisponibilidad,
    eliminarProducto
}
