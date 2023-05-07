const fs = require('fs');
const crearArchivo = async(number = 5, listar = false, hasta = 10) => {
const colors = require('colors')

    try {
        console.log(`==========TABLA DE MULTIPLICAR DEL ${colors.bgMagenta(number)}==========`.green)

        let salida = ''

        for (let i = 1; i <= hasta ; i++)  {
            salida += `${number} x ${i} = ${number * i}\n`
            console += `${number} x ${i} = ${number * i}\n`
                    }

        console.log(console)
        fs.writeFile( `./salidas/tabla${number}.txt` , salida) ;   
        return `Tabla del ${ number} creada como texto!`
}       
    catch (error) {
       throw err 
    }
}
module.exports = {
    crearArchivo
}