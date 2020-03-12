/*Funciones
antes ES6*/
function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age,country);
}

/*es6*/
function newFunction2(name = 'Oscar' , age = 32, country = "MX"){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', 23, 'CO');

/*Concatenacion
antes de Es6*/

let hello = "Hello";
let world = "world";
let epciPhrase = hello + '' + world;
console.log(epciPhrase);

/*es6*/

let epciPhrase2 = `${hello} ${world}`;
console.log(epciPhrase2)

/*Multilinea 
Antes de es6*/

let lorem = "Qui consequatur. Commodi. Ipsun vel duis yet minima\n"
+ "Otra frase epica que necesitamos."

/*es6*/

let lorem2 = `Otra frase epica necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

/*Desestructuración de Objetos
Antes de ES6*/
    
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}
console.log(person.name, person.age);

/*es6*/

let{ name, age, country } = person;
console.log( name, age, country);

/*Arregloses6*/

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2 ]

console.log(education);

/*Let y Var antes del es6*/
{
    var globalVar = "Global Var";
}
{
    let globalLet = "Global let"
    console.log(globalVar);
}

console.log(globalVar);