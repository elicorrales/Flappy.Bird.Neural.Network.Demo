'use strict';

let learn = false;
const doPauseOrRun = (button) => {

    learn = learn ? false : true;

    if (learn) {
        button.className = 'btn btn-default';
        button.innerHTML = 'Press To Pause';
    } else {
        button.className = 'btn btn-info';
        button.innerHTML = 'Press To Continue';
    }
}



const doChangeNumHiddenNodes = (input) => {
    if (input.value !== undefined && input.value !== '') {
        document.getElementById('currNumHiddenNodes').innerHTML = document.getElementById('numHiddenNodes').value;
        birds.forEach(bird => bird.updateBrain(input.value));
    }
}


let userRequestedNewBirds = false;
const doChangeNumBirds = (input) => {
    if (input.value !== undefined && input.value !== '') {
        document.getElementById('currNumBirds').innerHTML = document.getElementById('numBirds').value;
        totalBirds = input.value;
        userRequestedNewBirds = true;
    }
}

const doResetBirdsBrains = () => {
    birds.forEach(bird => bird.resetBrain());
}

