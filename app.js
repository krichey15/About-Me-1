'use strict'
var myAnswer1 = 'no'
var myAnswer2 = 'YES'
var myAnswer3 = 'yes'
var myAnswer4 = 'no'
var myAnswer5 = 'YES'
var myAnswer6 = 'yes'

var userName = prompt('Hello what is your name?');
alert('Hello ' + userName);

var game = prompt('Would you like to play a game? y/n');
if ((game === 'y') || (game === 'yes') || (game === 'n') ||(game === 'no')){
  alert('Let\s play');
}
else{
  alert('Ok let\s not');
}


function guessingGame(){
  var question1 = prompt('Am I over thirty?');
  if(question1.toLowerCase() === myAnswer1){
    alert('Yes Correct!');
  }
  else{
    alert('Sorry wrong!');
  }
  var question2 = prompt('Do I want a unicorn?');
  if(question2.toUpperCase() === myAnswer2){
    alert('Woohoo you got it correct!');
    }
    else{
      alert('Sorry wrong!');
    }
    var question3 = prompt('Have I ever skipped school?');
    if(question3.toLowerCase() === myAnswer3){
      alert('Correct!');
    }
    else{
      alert('Sorry wrong!');
    }
    var question4 = prompt('Have I ever forgot my anniversary?');
    if (question4.toUpperCase() === myAnswer4){
      alert('Can\t never forget that');
    }
    else{
      alert('Would be crazy to forget such thing lol!');
    }
    var question5 = prompt('Do I think about the future?')
    if (question5.toLowerCase() === myAnswer5){
        alert('Yes I do!');
    }
    else{
      alert('Who does not think about the future');
    }
    var question6 = prompt('Do I like pizza?');
    if (question6.toUpperCase() === myAnswer6){
      alert('Correct');
    }
    else{
      alert('Who does not like pizza');
    }
  }


guessingGame();
