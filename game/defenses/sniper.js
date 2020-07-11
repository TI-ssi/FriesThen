import Defense from './defense.js';
import {Game} from '../lib/game.js';

export default class extends Defense{
    constructor(){	
	super('sniper',125,[75,150]);
    }

    attack(oppList){
		if(this.passedTick < 150) {
		this.passedTick++;
		}
		
		var tile = $('#'+this.tile).offset();
			var opp = oppList.find(opponent => Math.sqrt(Math.pow((opponent.x - tile.left),2) + Math.pow((opponent.y - tile.top),2)) <
			 $('#'+this.tile).height() * (2.5+(0.5*this.currentUpgrade)));
		if(!(opp === undefined)){
			this.rot=Math.atan2(opp.y - tile.top, opp.x - tile.left) * 180 / Math.PI;
			if((this.passedTick >= 150)){
			this.passedTick = 0;
			opp.loseLife(2+this.currentUpgrade);
			}
		}
	}

}
