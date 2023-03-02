function KT_Dictionary() { // the function and its name.
    var Kris = { //variable name is Kris. Kris is the Subject.
        Age: "27", //details about Kris
        Race: "Puerto Rican",
        Height: "5'11",
        Weight: "150 lbs",
        Hobbies: "Art and Music",
        Sound: "Hum!"
    };
    delete Kris.Sound; // Delete is a operator written in plain english. instead of using -
    document.getElementById("Dictionary").innerHTML = Kris.Sound; //here we are telling the page to return only the Sound Kris makes. if i change sound to age, i would get age, etc.
}