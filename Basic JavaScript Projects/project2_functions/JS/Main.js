function myfunction() { 
    var sentence = " The quick brown fox"; //function variable. variable name is sentence because it is a sentence.
    sentence += " jumped over the dog."; // concatenated sentence with +=

    document.getElementById("HOP").innerHTML = sentence; //id name is HOP. sentence is the variable.
}

function FD() {
    var sentence = " Dogs and Foxes are both in the Canine group  right?";
    sentence += "I wonder when they became their own individual thing.";

    document.getElementById("DOGS").innerHTML = sentence;
}
