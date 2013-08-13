jQuery(function($) {

  function Die() {
      this.addDie = function() {
        $('.dice').append('<div class="die">0</div>');
      };

      this.rollDie = function() {
        $('.die').each(function(k, die) {
        var value = Math.floor((Math.random()*6)+1);
        $(die).text(value);
        });
      };
  };

  var game = new Die();

  $('#roller button.add').on('click', game.addDie());
  $('#roller button.roll').on('click', game.rollDie());

  // function addDie() {
  //   $('.dice').append('<div class="die">0</div>');
  // };

  // function rollDie() {
  //   $('.die').each(function(k, die) {
  //   var value = Math.floor((Math.random()*6)+1);
  //   $(die).text(value);
  //   });
  // };

  // $(document).ready(function() {
  //   $('#roller button.add').on('click', addDie);
  //   $('#roller button.roll').on('click', rollDie);
  // });

});
