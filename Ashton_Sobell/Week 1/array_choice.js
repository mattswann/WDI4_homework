// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
// Your top choices
// Create an array to hold your top choices (colors, presidents, whatever).

// For each choice, log to the screen a string like: "My #1 choice is blue."

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
// console.log("this is working")

var topChoices = ["Earl Gray","Green tea","Rooibos","English breakfast"]

for(i = 0 ; i < topChoices.length; i++){
  console.log("my " +  (i+1) +  prefix(i+1)+  " choice is " + topChoices[i]+".")
}

function prefix(numberPrefix){
  numberPrefix = numberPrefix%10
  console.log(numberPrefix)
 if (numberPrefix === 1){
  return "st"}
  else if (numberPrefix === 2){
    return "nd"}
  else if (numberPrefix === 3){
    return "rd"}
  else return "th"
}