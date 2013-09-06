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

Game.prototype = {
  addDie: function(){
    showDie();
  },
  rollDie: function(){
    randDie();
  }
}


var game = new Game();
$(document).ready(function() {
  $('#roller button.add').on('click', game.addDie);
  $('#roller button.roll').on('click', game.rollDie);
});
