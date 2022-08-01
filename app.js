const argv = require("./config/yarks");
const { crearArchivo } = require("./helpers/multiplicar");


console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
