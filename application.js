var append = function(){
  $('.dice').append('<div class="die">0</div>')
}

var randomNumber = function(){
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
}


function Die() {};

Die.prototype = {
  addDie: function() {
    append();
  },
  rollDie: function() {
    randomNumber();
  }
}


var game = new Die();
$(document).ready(function() {
  $('#roller button.add').on('click', game.addDie);
  $('#roller button.roll').on('click', game.rollDie);

});

