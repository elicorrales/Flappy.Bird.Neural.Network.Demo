// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Pipe() {

  document.getElementById('currPipeSpace').innerHTML = document.getElementById('pipeSpace').value;
  if (document.getElementById('randomPipeSpace').checked) {
    this.spacing = random(100, parseInt(document.getElementById('pipeSpace').value));
  } else {
    this.spacing = parseInt(document.getElementById('pipeSpace').value);
  }

  this.top = random(height / 6, 3 / 4 * height);
  this.bottom = height - (this.top + this.spacing);

  this.x = width;
  document.getElementById('currPipeWidth').innerHTML = document.getElementById('pipeWidth').value;
  if (document.getElementById('randomPipeWidth').checked) {
    this.w = random(10, parseInt(document.getElementById('pipeWidth').value));
  } else {
    this.w = parseInt(document.getElementById('pipeWidth').value);
  }
  this.speed = 6;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}
