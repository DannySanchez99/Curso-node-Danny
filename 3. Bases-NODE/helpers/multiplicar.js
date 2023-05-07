const fs = require('fs');
require('colors')

 const crearArchivo = (number = 5) => {

    console.clear()
    console.log(`==========TABLA DE MULTIPLICAR DEL ${colors.bgMagenta(number)}==========`)

    let salida = ''

    for (let i = 1; i <= 10 ; i++)  {
        salida += (`${number} x ${i} = ${number * i}\n`)
    }

    console.log(salida)
    fs.writeFile( `tabla${number}.txt` , salida)    
    console.log(`Tabla del ${ number} creada como texto!`)

}

module.exports = {
    crearArchivo
}