/*code containing our script to run our game.html functions*/
//Assign3.1 JavaFunctions

//create a function to run our game
 function playGame() {
    // we are going to narrate what is going on in this function in the console
    console.log("playGame function was called");

    //roll a die by calling the rollDie function
    var die1 = rollDie();
    console.log("the first die roll is: " + die1);

    //roll a die by calling the rollDie function
    var die2 = rollDie();
    console.log("the second die roll is: " + die2);

    //add both results
    var sum = die1 + die2;
    console.log("the sum is: " + sum);

    //output the dice rolls to the page
    document.getElementById("die1Result").textContent = "Die 1 is: " + die1;
    document.getElementById("die2Result").textContent = "Die 2 is: " + die2;
    document.getElementById("sumResult").textContent = "sum is: " + sum;

    // game logic for win or lose
    if (sum == 7 || sum == 11) {
        document.getElementById("gameResult").textContent = "You Lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        //if the numbers are the same and there is no remainder, you win
        document.getElementById("gameResult").textContent = "you win";
    }
    else {
        document.getElementById("gameResult").textContent = "you pushed";
    }
}
//create separate function to generate dice rolls - random number generator between 1-6
function rollDie() {
    //generate a random number between 1 and 6
    var die = Math.random() * 6;
    //return the random number to the code that called this fuction
    return Math.ceil(die); //return whole number to function
}

//Assign6.1 Input Validation
/*Functions to check and run our input validation form page*/

function validateForm() {
    //set up nickname/shortcut to our form values
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var zipCode = document.getElementById("zip").value;

    //create a new string that concatenates first name + " " + last name
    var fullName = firstName + " " + lastName

    //see what values we are working with
    console.log("first name= " + firstName);
    console.log("last name= " + lastName);
    console.log("zip= " + zipCode);
    console.log("full name= " + fullName);

    //check to make sure that full name is 20 characters or fewer
    if (fullName.length > 20 || fullName.length == 1) {
        document.getElementById("loginStatus").innerHTML = "Please enter a valid name that is less than 20 characters";
        //alert("Please enter a valid name less than 20 characters");
    }
    else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "please enter a 5 digit zip code";
        //alert("please enter a 5 digit zip code");
    }
    else {
        document.getElementById("loginStatus").innerHTML = "Welcome, " + fullName + ". The secret word is Validation.";
        //alert("Welcome, " + fullName + ". The secret word is Validation.");
    }

    //prevent form from being submit (prevents it from submitting to server)
    return false;
}

//Assign7.1 Event Driven Programming
/*Create functions to run start and stop moveImage buttons*/
var intervalId = 0;
//this function will start moving the Image
function MoveImage(){
    //make it so we can't click on the start button since we just started the function
document.getElementById("startButton").disabled = true;
//make stop button clickable
document.getElementById("stopButton").disabled = false;
//create nickname varaible that points to our html image
    var image = document.getElementById("memeImage");

    //this will keep track of where the image was
    var oldX = 0;
    var oldY = 0;
    //keeping track of intervalId allows us to stop moving the image
    intervalId = setInterval(function(){
        //set the x and y coordinates for the image
        //don't go overboard with big numbers - could result in image going off page
        var newX = 8; //move image over by 8 pixels
        var newY = 8; //move image over by 8 pixels

        //oldX += newX is the same thing as oldX = oldX + newX
        oldX += newX;
        oldY += newY

        console.log("oldX = "+ oldX);
        console.log("oldY = "+ oldY);

        image.style.left = oldX + "px";
        image.style.top = oldY + "px";
        
    }, 100); //1000 is 1000 miliseconds = 1 second
}
//this function will stop moving the image
function stopMoveImage(){
    //call the built in Javascript function to clear out the interval
    clearInterval(intervalId);

    //make it so we can click on the start button since we just stopped the image
document.getElementById("startButton").disabled = false;
//make stop button not clickable
document.getElementById("stopButton").disabled = true;
}

/* Assignment 9.1 Palindrome Checker*/
function checkPalin(wordToTest){
//remove all the spaces in the string that was passed in
var cleanedWord = wordToTest.replace(/\s/g, "").toLowerCase();
//take our cleaned word with no spaces and all lower case and reverse it
var reversedWord = cleanedWord.split("").reverse().join("");
//if they are different, the function returns false
return cleanedWord == reversedWord;
}

console.log("radar=" + checkPalin("radar"));
console.log("tag=" + checkPalin("tag"));
console.log("A man a plan a canal Panama=" + checkPalin("A man a plan a canal Panama"));

//bContinue will track if the user wants to keep entering words
var bContinue = true;

//loop to keep running the code for as long as the user wants
do{
    //get a word from the user
    var userInput = prompt("Enter a word to test if it is a palindrome: ");

    //test the varaible that the user entered
    var isPalindrome = checkPalin(userInput);

    //show the user a message based on the true/false value returned from the function
    //if isPalindrome is true, statement will run
    if (isPalindrome){ //same as if (isPalindrome == true){
        alert(userInput + " is a palindrome!");
    }
    else{ //if not a palindrome
        alert(userInput + " is NOT a palindrome!");
    }

    //ask user if they want to continue testing palindromes
    var answer = prompt("Do you want to continue? (y/n)");

    // test to see if they entered n
    if (answer.toLowerCase() == "n"){
        bContinue = false; //change to false to exit the loop
    }

}while(bContinue); //while bContinue is true, keep running the loop