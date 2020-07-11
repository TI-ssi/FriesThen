import Defense from './defense.js';
import {Game} from '../lib/game.js';

export default class extends Defense{
    constructor(){
	super('broken_glass',10);
    }
    stepOn(opp){
		opp.loseLife(1);
		this.count--;
		if(this.count <= 0){
		Vue.delete(Game.state.defenses, this.tile);
		}
	}	
}
