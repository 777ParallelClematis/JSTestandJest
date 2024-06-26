var readlineSync = require('readline-sync')

// function for computer to choose randomly rock, paper or scissors

let options = ["rock", "paper", "scissors"]

function computerChoice(min, max){
   let minCeiled = Math.floor(0)
   let maxFloored = Math.ceil(3)
   let computerChoiceResult = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}console.log(computerChoice())

// get
console.log(${options[computerChoiceResult]})

// function for user to choose rock, paper or scissors
let userChoice = null


// if theyre the same, return "Draw"
// rock beats scissors, scissors beats paper, paper beats rock

