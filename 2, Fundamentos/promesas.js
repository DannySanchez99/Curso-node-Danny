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

const id = 1

getEmpleado(id)
    .then (empleado => console.log(empleado))
    .catch (err => console.log(err))

// OTRA MANERA DE REALIZAR UNAS PROMESAS EN CADENA  SON

getEmpleado(id)
    .then (empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log('El empleado ', nombre, 'tiene un salario de', salario ))
    .catch(err => console.log(err))
