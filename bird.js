
function Bird(brain) {
  this.y = height / 2;
  this.x = 64;

  this.gravity = 0.7;
  this.lift = -16;
  this.velocity = 0;

  this.score = 0;

  this.numHiddenNodes = document.getElementById('numHiddenNodes').value;

  if (brain !== undefined) {
    this.brain = brain.copy();
  } else {
    this.brain = new NeuralNetwork(5, this.numHiddenNodes, 2);
  }

  this.mutate = function (howMuch) {
    this.brain.mutate(mutateFunc);
  }

  // Mutation function to be passed into bird.brain
  const mutateFunc = (x) => {
  if (random(1) < 0.1) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}
  this.resetBrain = function () {
    this.brain = new NeuralNetwork(5, this.numHiddenNodes, 2);
  }

  this.updateBrain = function (numHiddenNodes) {
    this.numHiddenNodes = numHiddenNodes;
    this.brain = new NeuralNetwork(5, this.numHiddenNodes, 2);
  }

  this.show = function () {
    stroke(255);
    fill(255,100);
    ellipse(this.x, this.y, 32, 32);
  }

  this.offScreen = function () {
    return (this.y >= height || this.y <=0);
  }

  this.flyUp = function () {
    this.velocity += this.lift;
  }

  this.think = function (pipes) {

    if (pipes === undefined || pipes.length <1) {
      return; // no pipes, nothing to do
    }

    //find closest distance pipe to bird
    let closestPipe = pipes[0]; // let's assume it's first pipe that's closest
    let closestDistance = Infinity;
    pipes.forEach((pipe) => {
      let dist = (pipe.x + pipe.w) - this.x;
      if (dist < closestDistance && dist > 0) {
        closestPipe = pipe;
        closestDistance = dist;
      }
    })
    let inputs = [];
    //we need normalized inputs between 0 and 1
    inputs[0] = this.y / height; //bird's vertical position
    inputs[1] = closestPipe.top / height;
    inputs[2] = closestPipe.bottom / height;
    inputs[3] = closestPipe.x / width;// pipe's horz position (coming at bird)
    if (document.getElementById('useBirdVelocityAsInput').checked) {
      inputs[4] = this.velocity / 10;  //bird's velocity
    } else {
      inputs[4] = 0;
    }

    let outputs = this.brain.predict(inputs);
    if (outputs[0] > outputs[1] && this.velocity >=0) {
      this.flyUp();
    }
  }


  this.update = function () {

    this.score++;
    let currHighestScore = document.getElementById('highestScore').innerHTML;
    if (currHighestScore < this.score) {
      document.getElementById('highestScore').innerHTML = this.score;
    }

    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

/*
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
*/
  }

}
