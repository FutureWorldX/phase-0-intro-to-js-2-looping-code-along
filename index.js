// Code your solutions in this file

function writeCards(names, event){
  //returns an array of thank you messages for each name provided to the function:
  let giftCards = [];
  for (let i = 0; i < names.length; i++) {
      console.log(`The value of names is: ${names[i]}.`);
      console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      //pushing the value of names[i] to the giftCards[i] array
      giftCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      console.log(`The value within the new giftCards array from array of names[i] is now: ${giftCards[i]}.`);
      //debugger; // use this when running node inspect index.js in the bash(terminal) window
    }
    return giftCards;
}

  function countDown(number){
    //logs each number when counting down, starting from the number provided
    //invokes console.log once for each number, counting down from the number provided to zero
    while (number >= 0) {
      //setting the while loop to look if the number reaches greater than or equals to zero
      console.log(number--);
    }
  }