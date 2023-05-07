const empleados = [
    {
        id: 1,
        nombre: 'Daniel'
    },

    {
        id: 2,
        nombre: 'Karen'
    },

    {
        id: 3,
        nombre: 'Luisa'
    } 
]

const salarios = [
    {
        id: 1,
        salarios: 1500
    },

    {
        id: 2,
        salarios: 2000
    },

    {
        id: 3,
        salarios: 1000
    }
]
// SIMPLIFICA LOS LLAMADOS O CALLBACKS, CON LAS FUNCIONES DECLARADAS COMO PROMESAS
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre
    
// MANERAS SIMPLIFICADAS DE USAR EL IF (?) Y EL ELSE (:) SON CON SIGNOS         
    (empleado) 
        ? resolve(empleado)
        : reject(`No se ha encontrado el empleado con el id ${id}.`)
    })    
}

const getSalario = () => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find( s => s.id === id)?.nombre
    
// MANERAS SIMPLIFICADAS DE USAR EL IF (?) Y EL ELSE (:) SON CON SIGNOS         
    (salario) 
        ? resolve(salario)
        : reject(`No se ha encontrado el empleado con el id ${id}.`)
    })    
}

// El async cumple con llamar la función realizando un llamado de nuevo a una promesa
const getInfoUsuario = async() =>{

    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `El salario del empleado ${empleado} es de ${salario}` 
        
    } catch (error) {
        return (error)        
    }
}

const id = 1

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL')
        console.log(err)
    })