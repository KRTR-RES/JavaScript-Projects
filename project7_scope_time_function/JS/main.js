// global variable

var X=10; // Var is placed first in front of the function, making is Global.
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

// Local Variable

function Add_Numbers_3() {
    var Y=12;
    document.write(20+Y+"<br>");
}
function Add_Numbers_4() { //Here, Y is NOT defined, so it wont show up, using the console.log will help clarify any misunderstandings.
    document.write(Y+100);
    }
Add_Numbers_3();
Add_Numbers_4();    

function get_Date() {
    if (new Date() .getHours() < 18) { //these elements are how you call for date and time from within your computer.
    document.getElementById("Kris").innerHTML = "How are you my friend?"; //response if IF statement is met.
    }
}

function Yippy() { //fuction i made up.
    if (new Date() .getHours() < 10) {
    document.getElementById("Yup").innerHTML = "Too early still..";    
    }
}

function Height_function() { //function allowing individuals to pass if height is met.
Height = document.getElementById("height").value;
if (Height >= 5) {
    Pass = "You are tall enough to pass."
}
else { // introducing else statement. if IF is not met, else kicks in.
    Pass = "You are too short to pass."
}
document.getElementById("How_tall_r_u").innerHTML = Pass;
}

function Time_Function() { //time telling function
    var Time= new Date() .getHours(); //retrieving time and date withing computer.
    var Reply; //variable made for Reply to communicate with.
    if (Time < 12 == Time > 0) {
        Reply = "It is Morning Time!"; // if current time is LESS than 12, it is morning time still.
    }
    else if (Time >= 12 == Time < 18) { // time is Greater than 12, but less than 6pm.
        Reply = "It is Afternoon.";
    }
    else {
        Reply = "It is Evening Time."; // anything else after 6pm would be considered evening. this message would show.
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}