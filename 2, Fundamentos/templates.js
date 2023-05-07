// Los templates nos sirven para realizar saltos de linea y adjuntar texto ya definidio

const nombre = 'Wade' 
const real = 'Winston' 

const normal = nombre + ' ' + real 
const template = `${nombre} ${real}` 

console.log(normal) 
console.log(template) 

const html = `
<h1>Hola<h1>
<>Mundo<p>
<body>Menu<body>
` 
console.log(html) 
