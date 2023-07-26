const home = async (req, res, next) => {
    try {
        res.json({ mensaje: 'Bievenido a Tu Restaurante' })
    } catch (error) {
        next(error);
    }
}

const renderSignIn = (req, res) => {
    res.json({ mensaje: 'Ingresa Tus Datos' })
}

const renderSignUp = (req, res) => {
    res.json({ mensaje: 'Estas registrado' })
}


module.exports = {
    home, renderSignIn, renderSignUp
}
