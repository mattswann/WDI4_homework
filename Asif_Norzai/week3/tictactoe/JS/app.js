
var tictactoe = {
  lives: 3,
  btnEarth: $('btn-earth'),
  btnMars: $('btn-mars'),

  chooseWeapon: function () {
    $(this.btnEarth).on('click', function() {
        this.player1 = this.btnEarth
      });

      $(this.btnMars).on('click', function () {
        this.player2 = this.btnMars;
      });
  }
};
