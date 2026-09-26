let targetNum = Math.floor(Math.random() * 100);
let totalGuess = 0;

function submit() {
    const userNum = document.getElementById("number").value;
    const message = document.getElementById("message");

    if (userNum < 1 || userNum > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        message.style.color = "red";
        return;
    }

    totalGuess = totalGuess + 1;
    message1.textContent = "your attempt : " + totalGuess;
    message1.style.color = "blue";

    if (userNum == targetNum) {
        message.textContent = "Congratulations! You guessed the right number! " + targetNum;
        message.style.color = "green";
        Number.Input = "disabled";
    } else if (userNum > targetNum) {
        message.textContent = "Ohh Too high ! try again with new number . ";
        message.style.color = "orange";
    } else {
        message.textContent = "Ohh Too low ! try again with new number . ";
        message.style.color = "orange";
    }

}

function giveup() {
    const message = document.getElementById("message");

    message.textContent = "Well Tried ! The Target Number is : " + targetNum;
    message.style.color = "orange";

    Number.Input = "disabled";
}


function reset() {
    const userNum = document.getElementById("number").value;
    totalGuess = 0;

}



































