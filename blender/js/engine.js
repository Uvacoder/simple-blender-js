let statusBlender = 'off';
let blender = document.getElementById('blender');

let blenderSound = document.getElementById('blender-sound');
let blenderBtn = document.getElementById('blender-btn-sound');

function checkBlender() {
    if(statusBlender == 'off'){
        statusBlender = 'on';
        mixerNoise();
        blender.classList.add('active');
        
    } else {
        statusBlender = 'off'
        mixerNoise();
        blender.classList.remove('active');
    }
}

function mixerNoise() {
    if( blenderSound.paused ){
        blenderBtn.play();
        blenderSound.play();
    } else {
        blenderBtn.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}
        