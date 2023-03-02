function my_function() { // typeof shows what kind of input it is. it is a string. a variable made of text.
    var Fruit = "Apple";

    document.write(typeof "Fruit");
}

function myy_function() { // displays NaN becausae no number comes out of dividing 0 by 0.
    document.getElementById("Test").innerHTML = 0/0;
}

function a_function() { // WILL DISPLAY NaN because the input is text
    document.getElementById("Test1").innerHTML = isNaN('These are words.');
}

function b_function() { // displays false becausae 1234 IS  NUMBER
    document.getElementById("Test2").innerHTML = isNaN('1234');
}

function infinity() { // displays "infinity" because it is a very large number
    document.getElementById("Higher").innerHTML = (2E310);
}

function definity() { //displays "-infinity" because it is a very large number in the negatives
    document.getElementById("Lower").innerHTML = (-3E310);
}

function Truth() { // true because 10 is greater than 5
    document.getElementById("yes").innerHTML = (10>5);
}

function Not_Truth() { // displays false because 20 is not greater than 23.
    document.getElementById("nah").innerHTML = (20>23);
}

function Double_equal() { //equal to eachother after operation is performed.
    document.getElementById("Truuu").innerHTML = (10+2 == 12);
}

function Double_equal_false() { //not equal to eachothere
document.getElementById("NotTruuu").innerHTML = (15 == 12);
}

function Tripple_equal() { //will display true. they are equal to eachother
    var X= 10;
    var Y= 10;

    document.getElementById("Yee").innerHTML = (X === Y);
}

function Tripple_equal_false() { // will display false because they are diffenert input types
    var J=20;
    var K="twenty";

    document.getElementById("Naw").innerHTML = (J === K);
}

function Tripple_equal_close() { //false because they are not equal to eachother
    var C=30;
    var D=40;

    document.getElementById("Hey").innerHTML = (C === D);
}

function Tripple_equal_done() { //different values and input types. will be false
    var O= 4;
    var P= "five";

    document.getElementById("Bye").innerHTML = (4 === "five");
}

function Double_and_true() { // displays true because BOTH are correct
    var N=44;
    var M= 66;
    document.getElementById("AndTrue").innerHTML = (N>9 && M>8);
}


function Double_and_false() { // displays false because both are not true.
    var G=77;
    var H=88;
    document.getElementById("AndFalse").innerHTML = (G>80 && H>90);
}

function Double_or_true() { // displays true because atleast ONE is true
    var I= 40;
    var L= 32;
    document.getElementById("OrTrue").innerHTML = (I>45 || L>30);
}

function Double_or_false() { // displays false because both are not true.
    var F= 90;
    var Q= 99;
    document.getElementById("OrFalse").innerHTML = (F>91 || Q>100);
}

function not_function() { // the ! gives the opposite result meaning NOT. 20 is greater than 10 but will display false because the NOT. 
    document.getElementById("NOT").innerHTML = !(20 > 10);
}

function yot_function() { // again, becuase NOT (!) it will display the opposite. will be true 
    document.getElementById("YOT").innerHTML = !(20>30);
}

console.log(12+12); // lets you see results in the console of a page.

console.log(12>13);