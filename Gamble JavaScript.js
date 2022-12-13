// Enhance each function and put comments 
// above each line of code explaining what is happening in your own words.

function displayWelcome() {
    document.write("<h2>For everytime you roll a win, you will gain $200. However, for everytime you lose, $50 will be taken whether you have the money or not. Now, doesn't that sound fun!</h2>");
}

function displayInstructions() {
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
}

function play() {
    var die1 = Math.ceil(Math.random() * 6);

    var die2 = Math.ceil(Math.random() * 12);

    var sum = die1 + die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 8 || sum == 11) {
        document.write("You lose! Roll again. You might win it back.")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win money! Keep rolling")
        document.write("<br/>")
    }
    else {
        document.write("Try again. The risk is worth it.")
        document.write("<br/>")
    }
}
