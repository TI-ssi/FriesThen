import Defense from './defense.js';
import {Game} from '../lib/game.js';

export default class extends Defense{
    constructor(){
	super('potato_field', 150, [100,250]);
	this.max = 4;
	this.count = 0;
    }
    stepOn(opp){
	if(this.count > 0){
   	    opp.loseLife(1);
	    this.count--;
	}
    }
    waveEnd(){
	if(this.count < this.max ) {
	    this.count++;
	}
	}
	
    harvest(){
	let harvestAmount = 0;
	let bonus=this.currentUpgrade*5;
	switch(this.count)
	{
		case 4: harvestAmount+=25+bonus;
		case 3: harvestAmount+=20+bonus;
		case 2: harvestAmount+=15+bonus;
		case 1: harvestAmount+=10+bonus;
	}
	this.count=0;
	Game.state.cash += harvestAmount;
    }    
}
