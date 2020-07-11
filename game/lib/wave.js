import SingleWave from './singleWave.js';

class WaveFactory{
    constructor(){
	this.reset();
    }

    reset(){
	this.waveNb = 0;
    }
    
    start(gameState){
	this.currentWave = new SingleWave(gameState, ++this.waveNb);
    }

    stop(state){    
	this.currentWave.stop(state);
    }
}

export const Wave = new WaveFactory();
