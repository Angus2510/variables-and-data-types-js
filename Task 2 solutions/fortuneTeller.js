let heading = "fortune teller"
// let variable1 = "item1"
// let variable2 = "item2"
// let variable3 = "item3"
// let variable4 = "item4"
// let variable5 = "item5"

alert(heading)

// adding all the input into the system
let item1 = prompt("what is your mother's first name?");
let item2 = prompt("name the street you grew up on")
let item3 = prompt("name your favorite colour as a child")
let item4 = prompt("what is your current age")
let item5 = prompt("choose a number between 1-10")

// using these input to get outputs
//console.log(item1,item2,item3,item4,item5)
alert(`In ${item5} years you will meet your best friend named  ${item1} ${item2}, you will get married in ${Math.round(item4 / item5)} years and have ${item4 % item5} children. in ${item4 - item5} years you are going to dye your hair ${item3}.`)
