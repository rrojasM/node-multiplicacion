const fs = require('fs');
const colors = require('colors');
const crearArchivoTabla = async (base = 5, listar = false, hasta= 10) => {
    try {

        let salida = '';
        let consola = '';
     

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index} \n`
            consola += `${base} ${'X'.green}, ${index} ${'='.green} ${base * index} \n`
        }


        if (listar) {
            console.log('===================================='.green);
            console.log('Tabla del: '.green, colors.blue(base));
            console.log('===================================='.green);
            console.log(consola);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);

        return (`Tabla-${base}.txt`);
        


    } catch (error) {
        throw error;

    }
}

module.exports = {
    crearArchivoTabla
}