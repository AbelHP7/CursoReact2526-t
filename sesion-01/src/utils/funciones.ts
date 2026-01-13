//funciones tipadads
// crear la funcion sumar que sume 2 números y retorne un número

function sumar(a:number, b: number):number
{
    return a + b;
}

console.log(sumar(5,5)) 

// función saludar

function saludar(nombre:string): void {
    console.log ( "Bienvenido, ",nombre)
}

saludar("Abel")

//funcion con parametros opcionales

function crearUsuario(nombre:string , edad? : number, email :string ):
Usuario  {
    return{
        nombre: nombre,
        email: email,
        edad: edad,
    };
}

crearUsuario("Carlos", "carlos@gmail.com",34)

//types en TypeScript sirver para asociar diferentes tipos a una variable 

let id: string | number;
//id= "10";
type Tamano = "small" | "medium" | "large"

let talla: Tamano = "large"



//ejercicio 1:
/**
 * Producto(id,nombre,precio,disponible y categoria) siendo opcional la categoria 
 * Declarar una funcion llamada calcularTotal que reciba un array de productos y 
 retorne la suma de los productos que tengan categoria 
 */


 interface Producto {
    id:number;
    nombre:string;
    precio: number;
    disponible: boolean;
    categoria?: string ;
 }

 function calcularTotal(productos: Producto[]): number {
    return productos.reduce((total,producto)=> {
        return total + (producto.disponible ? producto.precio:0)
    },0)
 }

 const misProductos : Producto[]=[
    {
        id:1,
        nombre:"Impresora HP",
        precio: 356,
        disponible: true,
        categoria: "Electrónica",
    },
    {
        id:2,
        nombre:"Impresora HP",
        precio: 356,
        disponible: true,
        categoria: "Electrónica",
    },
    {
        id:3,
        nombre:"Impresora HP",
        precio: 356,
        disponible: true,
        categoria: "Electrónica",
    }
 ]

 const total = calcularTotal(misProductos);
 console.log("El total de mis productos es:", total)

 //crear un componente llamado header que muestre un header con nuestro nombre