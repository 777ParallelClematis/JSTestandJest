var readlineSync = require('readline-sync')

// function for computer to choose randomly rock, paper or scissors

let options = ["rock", "paper", "scissors"]
let computerChoiceResult = 0

let minCeiled = null
let maxFloored = null

function computerChoice(min, max){
   minCeiled = Math.floor(0)
   maxFloored = Math.ceil(3)
   let computerChoiceResult = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}console.log(computerChoiceResult)

// get
console.log(`${options[computerChoiceResult]}`)

// function for user to choose rock, paper or scissors
let userChoice = readlineSync.question("Enter 'r', 'p' or 's': ")
console.clear(`You entered ${userChoice}`)
console.log(`The computer chose ${computerChoiceResult}`)


// if theyre the same, return "Draw"
// rock beats scissors, scissors beats paper, paper beats rock

