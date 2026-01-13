const nombre: string ="pepe";
const  edad:number = 23
const esEstudiante:boolean = true;
const  bulo:null = null;
const indefinido: undefined = undefined;

let lenguajes: string[] = ["React", "JavaScript", "TypeScript"];
const numeros: number[] = [1,2,3,4,5];

//array de objetos:

let usuarios: { nombre: string; edad: number }[] = [
    { nombre: "Antonio", edad: 19},
    { nombre: "Sara" , edad: 39},
];

// solo un tipo de objeto

let persona: {} = {
    nombre:"Maria",
    edad: 30,
    activo: true
}

//interfaces o CONTRATOS
interface Usuario {
    id: number,
    nombre: string,
    email: string,
    edad?: number,
    activo: boolean
}

const usuario1: Usuario = {
    id: 1,
    nombre: "Pelayo",
    email: "pelayo@email.com",
    activo: false,
}

const usuario1: Usuario = {
    id: 2,
    nombre: "Marta",
    email: "marta@email.com",
    edad: 19,
    activo: true,
}