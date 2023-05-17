let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
const messageElement = document.getElementById("message")

const sumElement = document.getElementById("sum")
const cardsElement = document.querySelector("#cards")

const startGame = () => {
    cardsElement.textContent = "Cards: " + firstCard + " " + secondCard
    sumElement.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want bla bla bla"
    }
    else if (sum === 21) {
        message = "BlackJack"
        hasBlackJack = true
    }
    else {
        message = "You're out bro"
        isAlive = false
    }
    messageElement.textContent = message
}

const newCard = () => {
    console.log("Drawing a new card")
}
