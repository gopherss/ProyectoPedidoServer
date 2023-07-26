require('dotenv/config');
const express = require('express');
// const morgan = require('morgan');
const { Server: WebSocketServer } = require('socket.io');
const http = require('http');
const cors = require('cors');
const fileUpload = require('express-fileupload');

//Rutas
const usuarioRoutes = require('./routes/usuario.routes');
const productoRoutes = require('./routes/producto.routes');

//Conexion database
require('./database/mongoose');


//Configuraciones 
const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server, {
    cors: {
        origin: '*',
        methods: 'GET,PUT,PATCH,POST,DELETE',
    }
});

app.set('port', process.env.PORT || 3000);


//Middlewares
app.use(cors());
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))

//Rutas
app.use(usuarioRoutes);
app.use(productoRoutes);

io.on('connection', socket => {
    // console.log(socket.id);
    socket.on('producto', producto => {
        // console.log(producto);
        socket.broadcast.emit('producto', producto);
    });
})


server.listen(app.get('port'), _ => {
    const message = `sever on port http://localhost:${app.get('port')}`;
    console.log(message);
});


