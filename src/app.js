//Incluyo todas las dependencias que necesito en mi entry point

const express =  require('express');
const path = require("path");
const app = express();
const methodOverride = require("method-override");
//const btstrap = require("bootstrap");

//Routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/productsRoutes');

//ruta de vistas para view engine
app.set( "view engine", "ejs" );
app.set('views', path.resolve(__dirname, './views'));

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Configurar rutas para Bootstrap CSS y JS desde 'node_modules'
// Sirve los archivos CSS de Bootstrap
//app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

// Sirve los archivos JavaScript de Bootstrap
//app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"));

app.listen(3001 , ()=>{
    console.log("Server is running on port 3001")
});

//Uso de rutas
//ruta raiz
app.use('/', indexRouter);

//ruta productos
app.use(productsRouter);

