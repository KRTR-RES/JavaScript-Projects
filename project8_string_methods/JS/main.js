function Con_cat_sentence() { //concatenating all variable strings to form one whole sentence.
    var pt_1 = "I really";
    var pt_2 = " want to";
    var pt_3 = " spend all my money";
    var pt_4 = " on more time to enjoy life.";

    var Full_sentence = pt_1.concat(pt_2, pt_3, pt_4);
    document.getElementById("Concat_stringy").innerHTML = Full_sentence;
}

function slice_method() { //sliced the sentence up to a certain desired point. 
    var Sentence = "All work and no Play makes Johnny a Dull Boy.";
    var Section = Sentence.slice(0,20);
    document.getElementById("slice").innerHTML = Section;
}

function CAPS() { //changes all text in specific ID to caps
    var tence = "This was actually typed in Lower Case letters.";
    var full_sentence = tence.toUpperCase();
    document.getElementById("Uppercase").innerHTML = full_sentence;
}

function Surch() { //Searches the text and displays what place the searched word is in.
    var fence = "The fence is taller than a tree.";
    var T = fence.search("taller");
    document.getElementById("searching").innerHTML = T;
}

function string_method() { //converts var A number into a string.
    var A = 1234;
    document.getElementById("Numbers_to_string").innerHTML = A.toString();
}

function percision_method() { // shortens this number down to EIGHT vv numbers. specified after B.toPercision.
    var B = 123.4123412341234123412341234234;
    document.getElementById("Percision").innerHTML = B.toPrecision(8);
}

function fixed_method() { // adds a fixed amount of numbers after a decimal. there will be 20 numbers after the decimal.
    var C = 123.45678;
    document.getElementById("Fixed").innerHTML = C.toFixed(20);
}

function Value_of_method() { // returns the primative value of a number. simpliest root form.
    var D = 109.8765432
    var E = D.valueOf();

    document.getElementById("Value").innerHTML = E;
}