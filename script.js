var $picture = $('.picture');

$picture.on('mouseenter', function () {
  this.play(this);
});

$picture.on('mouseout', function() {
  this.load(this)
})