jQuery(function($) {

  function addDie() {
    $('.dice').append('<div class="die">0</div>');
  };

  function rollDie() {
    $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
    });
  };

  $(document).ready(function() {
    $('#roller button.add').on('click', addDie);
    $('#roller button.roll').on('click', rollDie);
  });

});
