const fs = require("fs");
const colors = require('colors');

const crearArchivo = async (base = 6, listar, hasta) => {
  try {
    let salida = "";

    for (let i = 0; i <= hasta; i++) {
      // const element = array[index];
      salida += `${base} x ${i} = ${i * base}\n`;
    }

    listar && console.log(salida.rainbow);

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    console.log("Archivo ceado".green);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
