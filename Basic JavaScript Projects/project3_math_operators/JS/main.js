function adding_function() {
    var addition = 5 + 5;

    document.getElementById("Math").innerHTML = "5 + 5 = " + addition;
}

function subtract_function() {
    var subtraction = 10 - 2;

    document.getElementById("Math1").innerHTML = "10 - 2 = " + subtraction;
}

function multi_function() {
    var multiply = 8 * 4;

    document.getElementById("Math2").innerHTML = "8 * 2 = " + multiply;
}

function div_function() {
    var divide = 32 / 6;

    document.getElementById("Math3").innerHTML = "32 / 6 = " + divide;
}

function lots_of_math() {
    var complex = 55 + 72 / 4 * 11;

    document.getElementById("Math4").innerHTML = "55 plus 72 divided by 4 multiplied by 11 equals " + complex;
}

function modulus_function() {
    var modulate = 253 % 7;

    document.getElementById("Math5").innerHTML = "253 % 7 =" + modulate;
}

function negative_transform() {
    var K = 1000

    document.getElementById("Math6").innerHTML = -K;
}

function increment_up() {
    var T = 10;
    T++;

    document.write(T);
}

function increment_down() {
    var D = 13;
    D--;

    document.write(D);
}

window.alert(Math.random() * 10);

function Round() {
    var X = "5.6";

    document.getElementById("Math_Object").innerHTML = Math.round(X);
}
