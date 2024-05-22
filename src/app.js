//Incluyo todas las dependencias que necesito en mi entry point

const express =  require('express');
const path = require("path");
const app = express();
const methodOverride = require("method-override");

//Routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/productsRoutes');
const genresRouter = require('./routes/genresRoutes');
const artistsRouter = require('./routes/artistsRoutes');

//ruta de vistas para view engine
app.set( "view engine", "ejs" );
app.set('views', path.resolve(__dirname, './views'));

// Configurar la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

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

//ruta generos
app.use(genresRouter);

//ruta artistas
app.use(artistsRouter);



