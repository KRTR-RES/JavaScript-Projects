let car = {
    make: "Toyota",
    model: "Avalon",
    year: "2022",
    color: "black",
    details: function() {
    return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.details();

