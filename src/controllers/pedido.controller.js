const Pedido = require('../models/pedido');



const crearPedido = async (req, res, next) => {
    try {
        const { tiempoentrega, completado, total, orden } = req.body;
        const nuevoPedido = new Pedido({
            tiempoentrega,
            completado,
            total,
            orden
        });

        const response = await nuevoPedido.save();

        return res.json(response);
    } catch (error) {
        return next(error);
    }
}


const obtenerPedidos = async (req, res, next) => {
    try {
        const pedidos = await Pedido.find().hint({ $natural: -1 });
        return res.json(pedidos)
    } catch (error) {
        return next(error);
    }
}

const obtenerPedido = async (req, res, next) => {
    const { _id } = req.params;
    try {
        const pedido = await Pedido.findById(_id).hint({ $natural: -1 });
        return res.json(pedido)
    } catch (error) {
        return next(error);
    }
}

const obtenerPedidoNoCompletado = async (req, res, next) => {
    try {
        const pedidos = await Pedido.find({ completado: { $eq: false } });
        return res.json(pedidos)
    } catch (error) {
        return next(error);
    }
}

const definirTiempoPedido = async (req, res, next) => {
    const { tiempoentrega } = req.body;

    try {
        const pedidoActualizado = await Pedido.updateOne(
            { _id: { $eq: req.params._id } }, { $set: { tiempoentrega: tiempoentrega } }
        );
        return res.json(pedidoActualizado)
    } catch (error) {
        return next(error);
    }
}


module.exports = {
    crearPedido,
    obtenerPedidos,
    obtenerPedido,
    obtenerPedidoNoCompletado,
    definirTiempoPedido
}