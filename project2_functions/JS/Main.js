function myfunction() { 
    var sentence = " The quick brown fox"; //function variable. variable name is sentence because it is a sentence.
    sentence += " jumped over the dog."; // concatenated sentecne with +=

    document.getElementById("HOP").innerHTML = sentence; //id name is HOP. sentence is the variable.
}