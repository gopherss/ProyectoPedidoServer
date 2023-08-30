const { Router } = require('express');
const pedido = require('../controllers/pedido.controller');

const router = Router();

router.post('/guardar-pedido', pedido.crearPedido);
router.get('/obtener-pedidos', pedido.obtenerPedidos);
router.get('/obtener-pedido/:_id', pedido.obtenerPedido);
router.get('/obtener-pedido-no-completado', pedido.obtenerPedidoNoCompletado);
router.patch('/actualiza-tiempo/:_id', pedido.definirTiempoPedido);

module.exports = router;


