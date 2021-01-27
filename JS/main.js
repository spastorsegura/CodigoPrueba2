// document.querySelector("button")
//             .onclick = function(){
//                 alert("hola mundo hola hola ")
//             }

// let nombre="Sebastian";
// let edad=33;

// // console.log(nombre,edad);

// let sumaEdad2=edad+2;
// let sumaEdad3=edad+3;

// edad=40;

// console.log(edad)

// // No se puede sobreescribir
// const PI = 3.14; 


// Scope

// let nombre = "Sebastian";

// {
//     let nombre2= "Jose";
//     console.log("nombre2", nombre2);
//     console.log("nombre",nombre)
// }

// console.log("nombre2",nombre2)

// console.log("mensaje",2,[],{});

// let nombre="Sebastian"
// console.log("Nombre",nombre);
// console.error("error!!");
// console.warn("warnings!!")

// console.dir(document)

// let nombre="string";
// let age=23;
// let bool=true;
// let indefinido;
// let nulo=null;
// let simbolo=Symbol("abc");
// let objeto={};

// console.log("nombre",typeof nombre)
// console.log("age",typeof age)
// console.log("bool",typeof bool)
// console.log("indefinido",typeof indefinido)
// console.log("nulo",typeof nulo)
// console.log("simbolo",typeof simbolo)
// console.log("objeto",typeof objeto)

// Cambiar tipo de datos

// let numero1="1";
// let numero2="2";

// let numero1="1.50";
// let numero2="2.50";

// // let total=parseInt(numero1)+parseInt(numero2);
// let total=parseFloat(numero1)+parseFloat(numero2);

// console.log("total",typeof total, total)

// let catorce = 14;

// console.log("catorce",typeof catorce, typeof catorce.toString())

//   Funciones declarativas se pueden evocar antes
// function suma(a,b){
//     return a+b
// }

// console.log(suma(2,3));


// let restar = function(a,b){
//     return a-b
// }

// console.log(restar(4,2));


// // Arrow function
// const multiplicar = (a,b) => {
//     console.log("Hola dentro de multiplicar")
//     return a*b;
// }

// console.log(multiplicar(2,2));

// Funciones - ciudadano de primera clase
// function sumar(a,b){
//     return a+b
// }

// let suma=sumar;

// console.log(suma(2,3));

// let suma2=sumar(3,4);

// console.log("suma 2",suma2);

// console.log(sumar(sumar(4,4),4));

// // Closure

// function sumaBase(x){
//     return function(y){
//         return x+y
//     }
// };

// const sumabase5 = sumaBase(5);
// const sumabase10 = sumaBase(10);

// console.log(sumabase5);
// console.log(sumabase5(4));
// console.log(sumabase5(10));
// console.log(sumabase10(10));

// function count(){
//     let count = 0;

//     return function(){
//         count = count+1;
//     }
// }

// let count1 = count();

// console.log(count1())
// console.log(count1())
// console.log(count1())
// console.log(count1())


// ambito

function(){
    console.log("uno")
}

function(){
    console.log("dos")
    function tres(){
        console.log("tres")
    }
}
