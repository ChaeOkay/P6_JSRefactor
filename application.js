var showDie = function(){
  $('.dice').append('<div class="die">0</div>');
}

var randDie = function(){
  $('.die').each(randNum);
}

var randNum = function(k, die){
  var value = Math.floor((Math.random()*6)+1);
  $(die).text(value);
}


function Game(){
}

Game.prototype.addDie = function(){
  $('#roller button.add').on('click', showDie);
}

Game.prototype.rollDie = function(){
  $('#roller button.roll').on('click', randDie);
}


$(document).ready(function() {
  var game = new Game();
  game.addDie();
  game.rollDie();
});
