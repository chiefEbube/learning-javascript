let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
const messageElement = document.getElementById("message")

const sumElement = document.getElementById("sum")
const cardsElement = document.querySelector("#cards")

function getRandomCard() {
    let randomNum = Math.ceil(Math.random() * 13)
    if (randomNum === 1) { return 11 }
    else if (randomNum > 10) { return 10 }
    else { return randomNum }
}

const renderGame = () => {
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "BlackJack"
        hasBlackJack = true
    }
    else {
        message = "You're out, bro"
        isAlive = false
    }
    messageElement.textContent = message
}

const startGame = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}

const newCard = () => {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame()
    }

}
