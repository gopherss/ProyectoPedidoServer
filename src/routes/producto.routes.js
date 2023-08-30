const { Router } = require('express');
const producto = require('../controllers/producto.controller');

const router = Router();

router.post('/guardar-producto', producto.crearProducto);
router.get('/obtener-producto', producto.obtenerProducto);
router.get('/obtener-producto-disponible', producto.obtenerProductoDisponible);
router.delete('/eliminar-producto/:_id', producto.eliminarProducto);
router.put('/editar-disponibilidad', producto.editarDisponibilidad);

module.exports = router;

