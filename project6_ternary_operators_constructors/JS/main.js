function Ride_Function () {
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function () {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young " : "You are old enough ";
    document.getElementById("Vote_Age").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


function Smash(Name, Year, Main) {
    this.Smash_Name = Name;
    this.Smash_Year = Year;
    this.Smash_Main = Main;
}

var Mario = new Smash("Mario Bros", 1984, "Mario");
var Link = new Smash("LegendofZelda", 1979, "Link");

function Jfunction() {
    document.getElementById("New_and_This").innerHTML =
    "SSBU has a character named " + Mario.Smash_Main + " and was made in " + Mario.Smash_Year;
}

function count_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point =9;
        function Plus_One() {starting_point += 1;}
        Plus_One();
        return starting_point;
    }
}