function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:<h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var j = 0; j < sizeArray.length; j++) { // a for operator
        if (sizeArray[j].checked) {
            var selectedSize = sizeArray[j].value;
            text1 = text1+selectedSize+"<br>"; //"you ordered" pizza size. then more lines are added after for toppings
        }
    }
    if (selectedSize === "Personal Pizza") { //this is the code for the prices of a pizza by their size.
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Super Extra Large Pizza") {
        sizeTotal = 24;
    }
    runningTotal = sizeTotal; // now the running total is beginning with the size of the pizza, vvv
    console.log(selectedSize+" = $"+sizeTotal+".00"); // waiting for more to be added.
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these THREE variables will get passed on to each function.
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) { //dragging down the last function and the text1 string. "You Ordered"
    var toppingTotal = 0; //Starting with $0 for toppings
    var selectedTopping = []; //waiting on input.
    var toppingArray = document.getElementsByClassName("Toppings"); //pulling options from the form the input 
    for (var j = 0; j < toppingArray.length; j++) {                               //class"Toppings".
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")"); //this will show up in console log.
            text1 = text1+toppingArray[j].value+"<br>"; //showing all the toppings we added on out order.
        }
    }
    var toppingCount = selectedTopping.length; //toppingCount variable introduced.
    if (toppingCount > 1) { //if topping count is LESS than 1, which is none,
        toppingTotal = (toppingCount - 1); //-1 actually means $0 if no toppings are seleceted.
    } else {
        toppingTotal = 0; //otherwise, topping total is atleast $1
    }
    runningTotal = (runningTotal + toppingTotal); //Running total now means sizeTotal.
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; //Placing this information in the showText div id in the cart id.
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
    //<strong> = bold. totalPrice id in cart id.
    
};