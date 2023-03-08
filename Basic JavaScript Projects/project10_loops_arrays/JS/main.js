var G = 100
document.write(G);
{
    let G = "50";
    document.write("<br>" + G);
}
document.write("<br>" + G);

function Call_Loop() {
    var Num = "";
    var X = 1;
    while (X<21) {
        Num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Num;
}

function LONG() {
    var J = "Kristian";
    var K = J.length;

    document.getElementById("Name").innerHTML = K;
}

var instruments = ["Guitar", "Bass", "Drums", "Flute", "Clarinet", "Trumpet", "Tamborine", "Keyboard"];
var Content = "";
var Y;
function For_Loop() {
    for (Y = 0; Y < instruments.length; Y++) {
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Food_Pic = [];
    Food_Pic[0] = "grilled cheese";
    Food_Pic[1] = "Burger";
    Food_Pic[2] = "Salad";
    Food_Pic[3] = "Corn Dog";
    Food_Pic[4] = "Rice and Beans";
    document.getElementById("Array").innerHTML = "This is a " + Food_Pic[3] + ".";
}

function constant_function() {
    const Art_Piece = {type:"canvas", size: "36x36", color:"green"};
    Art_Piece.color ="Yellow";
    Art_Piece.Price ="$999.00";
    document.getElementById("Constant").innerHTML = "The Color of the " + Art_Piece.type  + " Piece is " + Art_Piece.color;
}
