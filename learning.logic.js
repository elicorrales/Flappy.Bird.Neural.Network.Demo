'use strict';

const learnTheGame = (learningCycles) => {

  for (let cycle = 0; cycle < learningCycles; cycle++) {

    if (counter % 75 == 0) {
      pipes.push(new Pipe());
    }
    counter++;

    if (userRequestedNewBirds && prevTotalBirds != totalBirds) {
      newBirds();
      userRequestedNewBirds = false;
    }

    for (var i = pipes.length - 1; i >= 0; i--) {
      //pipes[i].show();
      pipes[i].update();

      let successfulBirds = birds.filter(bird => { if (!pipes[i].hits(bird)) { return true; } else { savedBirds.push(bird); return false; }; });
      birds = successfulBirds;

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }

    let successfulBirds = birds.filter(bird => { if (!bird.offScreen()) { return true; } else { savedBirds.push(bird); return false; }; });
    birds = successfulBirds;

    if (birds !== undefined && birds.length > 0) {
      birds.forEach(bird => {
        bird.think(pipes); //bird glances at current pipes
        bird.update();
        //bird.show();
      });
    }

    if (birds.length === 0) {
      counter = 0;
      nextGenerationOfBirds();
      pipes = [];
      pipes.push(new Pipe());
    }

  }

}