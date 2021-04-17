function countryintro()
{
  var country = prompt("which country do u wanna know?");
  var weather ;
  var food;
  var currency;

  if( country === 'England') {
      weather = 'horrible';
      food = 'disgusting';
      currency = 'pounds';
  }

  else if( country === 'Germany') {
      weather = 'a little bit cold';
      food = 'like Chinese northeastern food to some extent';
      currency = 'euro';
  }

  else if( country === 'France') {
      weather = 'warm';
      food = 'delicate';
      currency = 'Euro';

  }else {
      weather = 'still to be discovered';
      food = 'not introed yet';
      currency = 'just like the previous item';
  }

  var message = 'this is ' + country + ', the weather is ' +
              weather + ', the food is ' + food + ' and the ' +
              'currency is ' + currency;
 document.getElementById("demo").innerHTML = message;
}

function treattopic()
{
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
  alert("i said don't click me !!!!!")
}
