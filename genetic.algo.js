'use strict';


const nextGenerationOfBirds = () => {

    calculateFitness();

    birds = [];
    for (let i=0; i<totalBirds; i++) { birds[i] = pickNewBestBird(); }

    savedBirds = [];

    let generations = parseInt(document.getElementById('generations').innerHTML);
    generations++;
    document.getElementById('generations').innerHTML = generations;
}

/*
const calculateFitness = () => {
    let sum = 0;
    birds.forEach(bird => sum += bird.score);
    if (sum === 0) return;
    birds.forEach(bird => bird.fitness = bird.score/sum);
}
*/
const calculateFitness = () => {
    let sum = 0;
    savedBirds.forEach(bird => sum += bird.score);
    if (sum === 0) return;
    savedBirds.forEach(bird => bird.fitness = bird.score/sum);
}

const pickNewBestBird = () => {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - savedBirds[index].fitness;
        index++;
    }
    index--;

    let bird = savedBirds[index];
    let child = new Bird(bird.brain);
    child.mutate(0.1);
    return child;
}

/*
const pickNewBestBird = () => {

    let bird = random(savedBirds);
    let child = new Bird(bird.brain);
    child.mutate(0.1);
    return child;
}
*/