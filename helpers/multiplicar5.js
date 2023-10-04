const fs = require('fs')
const path = require('path');
const colors = require('colors')


const crearArchivo = async (base = 5, listar = false, hasta, ruta) => {
    try {
        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `\t${base} ${' X '.yellow} ${i} ${' = '.yellow} ${base * i} \n`;
        }


        if (listar) {
            console.log(' ============================\n'.bgWhite);
            console.log('    TABLA DEL:'.bold.green, colors.blue.bold(base + ` DEL 1 HASTA ${hasta}\n`));
            console.log(' ============================'.bgWhite);
            console.log(salida.bold);
        }


        const rutaArchivo = path.join(ruta, `tabla-${base}.txt`);

        const salida2 = colors.strip(salida)

        fs.writeFileSync(rutaArchivo, `\n  TABLA DEL : ${base + ` DEL 1 HASTA ${hasta}` + "\n\n" + salida2}`);

        return rutaArchivo;


    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}