//Crear un algoritmo con un condicional.
let birthYear = parseInt(prompt("Insert your birth year"))
let age = 2022 - birthYear;

if(age>=18) {
    let fullName = prompt("Insert your full name");
    alert("Your name is" + " " + fullName + " " + "and you are" + " " + age + " " + "years old")

}

//Crear un algoritmo utilizando un ciclo.
for (let i = 5; i <=15; i++) {
    
    let ingreseNumero = prompt("Ingrese número"); 

    i++;
    alert(i);
}

//Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor.
let number1 = prompt ("write a number")
let number2 = prompt ("Write another number")

if (number1>number2) {
    alert (number1);
}
else {
    alert (number2);
}

//El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuánto le saldría.
let price = 5;
let quantity = parseFloat(prompt("Input the number of ice creams you wish to buy"));
let totalValue = (price * quantity);

alert ("The amount to pay is $" + totalValue);

//Escriba un programa en donde se le solicite la edad al usuario y calcule su año de nacimiento, tomando en cuenta que el año actual es 2022.
let age = parseInt(prompt("Input your age"));
let year = 2022;
let birthYear = 2022 - age;

alert ("You were born in" + " " + birthYear);

//Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert.
let note1 = parseFloat(prompt("Input first note"));
let note2 = parseFloat(prompt("Input second note"));
let note3 = parseFloat(prompt("Input third note"));

let avg = (note1 + note2 + note3) / 3;

if (avg >= 4) {
    alert("Approved")
} else {
    alert("Not approved")
}

//5)Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.NOTA: Solo solicitar el nombre y apellido si es mayor a 18.
let birthYear = parseInt(prompt("Insert your birth year"))
let age = 2022 - birthYear;

if(age>=18) {
    let fullName = prompt("Insert your full name");
    alert("Your name is" + " " + fullName + " " + "and you are" + " " + age + " " + "years old")

}

//Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final.
let product = parseFloat(prompt("Insert the product price"));
let iva = 1.21;
let finalPrice = product * iva;

alert("Final Price is" + " " + "$" + finalPrice);

//Escriba un programa que le pida una letra al usuario y le diga si es una vocal o no.
let insertLetter = prompt("Insert a letter");

if (insertLetter == "a" || insertLetter == "e" || insertLetter == "i" || insertLetter == "o" || insertLetter == "u") {
    alert("The letter is a vowel");
} else if (insertLetter == "q" || insertLetter == "w" || insertLetter == "r" || insertLetter == "t" || insertLetter == "y" || insertLetter == "p" || insertLetter == "s" || insertLetter == "d" || insertLetter == "f" || insertLetter == "g" || insertLetter == "h" || insertLetter == "j" || insertLetter == "k" || insertLetter == "l" || insertLetter == "z" || insertLetter == "x" || insertLetter == "c" || insertLetter == "v" || insertLetter == "b" || insertLetter == "n" || insertLetter == "m") {
    alert("The letter is a consonant");
} else {
    alert("letter not found")
}

//4)	Escriba un programa en donde se le solicite al usuario que ingrese 2 números y le muestre en pantalla un mensaje cuando su suma de 10 y su división tenga como resto 0.
let insertNumber1 = parseInt(prompt("Insert first number"));
let insertNumber2 = parseInt(prompt("Insert second number"));

if ((insertNumber1 + insertNumber2 == 10) && (insertNumber1 % insertNumber2 == 0)) {
    alert("Ok");
}
