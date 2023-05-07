// SON LLAMADOS O FUNCIONES QUE SE REALIZAN CON TIEMPO DESEADO
setTimeout(function (){
    console.log('Hola mundo')
}, 1000)
// CUALQUIERA DE AMBAS ES LO MISMO SOLO QUE EN UNA AHORRAS CODIGO
setTimeout( () => {
    console.log('Hola mundo')
}, 1000)


const getUsuarioByID = (id, callback) => {

    const usuario = {
    id,
    nombre: 'Danny'
    }

    setTimeout(() => {
        callback(usuario)
    }, 2000)
}


getUsuarioByID(10, (usuario) => {
    console.log(usuario.id)
    console.log(usuario.nombre.toUpperCase())
})
