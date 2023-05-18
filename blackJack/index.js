let hands = ["rock", "paper", "scissors"]

function randHands() {
     let i = Math.floor(Math.random() * 3)
     return hands[i]
}

console.log(randHands())



// let dayOfMonth = 13
// let weekday = "Friday"
// if (weekday === "Friday" && dayOfMonth === 13){
//      console.log("spooky face")
// }


// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.pop()
// largeCountries.push("Parkistan")
// largeCountries.shift()
// largeCountries.unshift("China")

// console.log("The 5 largest countries in the world:")

// for (let i = 0; i < largeCountries.length; i++){
//      console.log("- " + largeCountries[i])
// }