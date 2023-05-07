const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre () {
        return `${ this.nombre} ${this.apellido} ${this.poder}`
    }
}

//FORMA INCORRECTA O MANERA EXTENSA
//const nombre = deadpool.nombre
//const apellido = deadpool.apellido
//const poder = deadpool.poder

// PARA QUE QUEDE MEJOR LA DESTRUCTURACION SE UTILIZA ESTE METODO Y NO REALIZAR LO QUE HICE ARRIBA, MEJOR USAR LO DE ABAJO

//FORMA CORRECTA Y MAS AHORRATIVA DE CODIGO
const {nombre, apellido, poder, edad} = deadpool
console.log(nombre, apellido, poder, edad)

function Heroes ({nombre, apellido, poder, edad = 1000}) {

    nombre = 'Fernando'
    console.log(nombre, apellido, poder, edad)
}

const heroes = [Deadpool, Batman, Superman]

//FORMA INCORRECTA
//const h1 = heroes[0]
//const h2 = heroes[1]
//const h3 = heroes[2]

//FORMA CORRECTA
const [h1, h2, h3] = heroes

console.log(h1, h2, h3)

