// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

let totalBirds = document.getElementById('numBirds').value;
let prevTotalBirds = totalBirds;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;

function setup() {
  let canvas = createCanvas(640, 480);
  document.getElementById('currNumHiddenNodes').innerHTML = document.getElementById('numHiddenNodes').value;
  document.getElementById('currNumBirds').innerHTML = document.getElementById('numBirds').value;
  document.getElementById('currPipeWidth').innerHTML = document.getElementById('pipeWidth').value;
  document.getElementById('currPipeSpace').innerHTML = document.getElementById('pipeSpace').value;

  newBirds();
  canvas.parent('canvasParent');
  //pipes.push(new Pipe());
}

const newBirds = () => {
  birds = [];
  savedBirds = [];
  for (let i = 0; i < totalBirds; i++) { birds[i] = new Bird(); }
  prevTotalBirds = totalBirds;
}

function draw() {

  if (learn) {
    document.getElementById('currLearningCycles').innerHTML = document.getElementById('learningCycles').value;
    learnTheGame(document.getElementById('learningCycles').value);
  }

  document.getElementById('numBirdsLeft').innerHTML = birds.length;


  background(0);
  birds.forEach(bird => bird.show());
  pipes.forEach(pipe => pipe.show());

}

