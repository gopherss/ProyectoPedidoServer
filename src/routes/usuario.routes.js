const { Router } = require('express');
const usuario = require('../controllers/usuario.controller');

const router = Router();

router.get('/', usuario.home);
router.get('/signin', usuario.renderSignIn);
router.get('/signup', usuario.renderSignUp);

module.exports = router;

