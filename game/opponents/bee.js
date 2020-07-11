import Opponent from './opponent.js';
import {Game} from '../lib/game.js';

export default class extends Opponent{
    constructor(waveNb){
	super(waveNb/2,5,1);
    }
}
