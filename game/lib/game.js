import {Wave} from './wave.js';
import Opponent from '../opponents/opponent.js';

import defenseBrokenGlass from '../defenses/broken_glass.js';
import defensePatator from '../defenses/patator.js';
import defensePotatoField from '../defenses/potatoField.js';
import defenseSniper from '../defenses/sniper.js';

/* ideas
    atomic ketchup
    pluie de gras (super pouvoir? )

    niveau dennemi avec gain dargent lié
    bonus de wave lie au frittes restante
    bonus spontane en cours de wave (mob defi etc)

    tour sniper
    tour ralentissante
    tour laser en continu
    tour de buff

    champs de patate! def sur chemin, bank ailleur

barre de vie avec visuel pour type dennemi.
fatigue ou bersek quand moins de vie
 */

class GameState{
    constructor(){    
      this.state = {
	  paused: true,
	  intervalHandle : null, 
	  oppId:0,     
	  screen : 'start',
	  frites : 10,
	  cash   : 100,
	  selectedTile:'0',
	  commandView:'general',
	  waving: false,
	  rainTime:0,
	  wave : 0,
	  mapCount:0,
	  currentMap:0,
	  opponents:[],
	  defenses:{}
      };
    }
    
    reset(){
	  let state = this.state;
	  $.each(this.initialState, function(i, v){
	      state[i] = v;
	  });
	  //objectNb = 0;
	  this.state.opponents = [];
 	  this.state.defenses = {};
	  Wave.reset();
    }
    
    selected(x, y = 0){
	let clicked = x;
	if(y > 0){
	    clicked = clicked+"-"+y;
	}
	  if(clicked == "0" || this.state.selectedTile == clicked){
	      this.state.selectedTile = 0
	      this.state.commandView = "general";
	  }else {
	      this.state.selectedTile = clicked;
	      if(this.state.map.path[this.state.map.path.length-1] == (clicked)){
		  this.state.commandView = "lastPathTile";
	      }else if(!(this.state.defenses[clicked] === undefined) && !(this.state.map.path.includes(clicked))){
		  this.state.commandView = "itemTile";
	      }else if(this.state.map.path.includes(clicked)){
		  this.state.commandView = "mapPath";
	      }else{
		  this.state.commandView = "selected";
	      }
	  }
    }
    
	buy(item){

		if(this.state.cash > 249 && item == "oil_rain"){
			this.state.rainTime=1000;
			this.state.cash -= 250;
		}

		if(this.state.defenses[this.state.selectedTile] === undefined) {
			if(this.state.cash >= 10 && item == 'broken_glass'){
			this.state.cash -= 10;
			Vue.set(this.state.defenses, this.state.selectedTile, new defenseBrokenGlass());
			} else if(this.state.cash >= 50 && item == 'patator') {
			this.state.cash -= 50;
			this.state.commandView = "itemTile";
			Vue.set(this.state.defenses, this.state.selectedTile, new defensePatator());
			} else if(this.state.cash >= 150 && item == 'potato_field') {
			this.state.cash -= 150;
			this.state.commandView = "itemTile";
			Vue.set(this.state.defenses, this.state.selectedTile, new defensePotatoField());
			} else if(this.state.cash >= 125 && item == 'sniper'){
				this.state.cash -= 125;
				this.state.commandView = "itemTile";
				Vue.set(this.state.defenses, this.state.selectedTile, new defenseSniper());
			}
		}
	}

    getState(){return this.state;}
  }

export const Game = new GameState();
