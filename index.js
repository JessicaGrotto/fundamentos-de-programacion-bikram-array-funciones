//Pair Programming
//Arrays
let arrayVacio = [];
const arrayNumeros = [0, 1,2,3,4,5,6,7,8,9];
const arrayNumerosPares = [0,2,4,6,8]
const arrayBidimensional = [[0,1,2]["a","b","c"]];

//Funciones
function suma (a,b){
    return a+b;
};

function potenciacion (a,b){
    return a**b;
};

function separarPalabras(str){
    return str.split(" ");
};

function repetirString (str, n){
    return str.repeat(n)
};

function esPrimo(n){
    if(n <= 1) return false;
    for (let i = 2; i < n; i++){
        if(i%2 === 0) return false;
    } return true
};

//Mezclando arrays y funciones
function ordenarArray(arr){
    return arr.sort((a,b) => a - b);
};

function obtenerPares(arr){
    return arr.filter(n => n % 2 === 0)
};

//function pintarArray(arr){}

//function arrayMapi(arr, func){}

function eliminarDuplicados(arr){
    return [...new Set(arr)]
}

//Iteraciones proyecto
//Arrays
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
const holaMundo = ["Hola","Mundo"];
let loGuardoTodo = ["Hola","que",23,42.33,"tal"];
let arrayDeArrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]];

//Funciones
function multiplicacion(a,b){
    return a*b;
};

function division(a,b){
    return a/b;
};

function esPar(n){
    if(n%2 === 0){
        return true
    } else {return false};
};

const arrayFunciones = [suma(a,b){return a+b}, resta(a,b){return a-b}, multiplicacion(a,b){return a*b}];

//Mezclando arrays y funciones
function ordenarArray2(arr){
    return arr.sort((a,b) => b-a);
};

function obtenerImpares(arr){
    return arr.filter(n => n/2 !== 0)
};

function sumarArray(arr){
    return arr.reduce((acc,n) => acc+n, 0);
};

function multiplicarArray(arr){
    return arr.reduce((acc,n)=> acc * n, 1);
};




