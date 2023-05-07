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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find( e => e.id === id) 
    
    
    if (empleado) {
        callback(null, empleado)
    }
    else {
        callback(`No se ha encontrado el empleado con el id ${id}.`)
    }
}


const getSalario = (id, callback) => {

    const salario = salarios.find( e => e.id === id) 
    
    if (salario) {
        callback(null, salario)
    }
    else {
        callback(`No se ha encontrado el salario del empleado con el id ${id}.`)
    }
}

const id = 10

getEmpleado(id, (err, empleado) => {

    if (err) {
          console.log('ERROR!!')
          return console.log(err)
      }
  
      console.log('Empleado existente...')
      console.log(empleado)
})
  
getSalario(id, (err, salario) => {

    if (err) {
        return console.log(err)
    }

    console.log('El salario si ha sido encontrado')
    console.log(salario)
})
