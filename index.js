function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400)
    return 'This one is on me!';
  else if (someValue > 2000 && someValue <= 2500)
    return 'I will gladly take your thirty bucks.';
  else if (someValue > 2500)
    return 'No can do.';
 
}

function ternaryCheckCity(someCity){
  // Write your code here!
  if (someCity === 'NYC')
    return 'Ok, sounds good.';
  else 
    return 'No go.';
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  if (someTip === 'generous')
    return 'Thank you so much.';
  else if (someTip === 'not as generous')
    return 'Thank you.';
  else
    return 'Bye.';
}