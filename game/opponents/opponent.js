import {Game} from '../lib/game.js';

export default class {

constructor(
    startingLife,speedCoeff,animalId
){
    this.x = Game.state.map.meta[Game.state.map.path[0]].x + Game.state.map.meta[Game.state.map.path[0]].w / 2 ;
    this.y = -Game.state.map.meta[Game.state.map.path[0]].h/2;
	this.animalId = animalId?animalId:0;
	this.id=Game.state.oppId++;
    this.startingLife = startingLife;
	this.life = startingLife;
    this.speed = speedCoeff * Game.state.map.meta[Game.state.map.path[0]].h / 100;
    this.wasOn = null;
    this.isOn = null;
    this.beforeCenter = true;
    this.heading = 2;
	this.comingFrom = 2;
}    
    loseLife(hit){
	this.life-=hit;
	if(this.life <= 0){
	    Game.state.cash++;
	    this.die();
	    return false;
	}
	return this;
    }
    move(){
	if(this.beforeCenter) {
	    switch(this.comingFrom){
	    case 0:
		this.y -= this.speed;
		break;
	    case 1:
		this.x += this.speed;
		break;
	    case 2:
		this.y += this.speed;
		break;
	    case 3:
		this.x -= this.speed;
		break;
		
	    }
	}else{
	    switch(this.heading){
	    case 0:
		this.y -= this.speed;
		break;
	    case 1:
		this.x += this.speed;
		break;
	    case 2:
		this.y += this.speed;
		break;
	    case 3:
		this.x -= this.speed;
		break;
		
	    }
	}
	let t = this;
	$.each(Game.state.map.path, function(i,v){
	    let tile = Game.state.map.meta[v];
	    if(t.x >= tile.x && t.x < tile.xx
	    && t.y >= tile.y && t.y < tile.yy) {
		t.isOn = i;
		if(t.beforeCenter
		   &&   ((t.y < (tile.y + (tile.h / 2)-7)  && t.comingFrom == 0)
		       || (t.x > (tile.x + (tile.w / 2)) && t.comingFrom == 1)
		       || (t.y > (tile.y + (tile.h / 2)-7) && t.comingFrom == 2)
		       || (t.x < (tile.x + (tile.w / 2)) && t.comingFrom == 3)
		      )
		){
		    t.beforeCenter = false;
		    if(t.heading == 4){
			t.explode();
		    }
		}
		
		if (t.wasOn != t.isOn){
		    if(!(Game.state.defenses[Game.state.map.path[t.isOn]] === undefined) && this.id!=1){
			Game.state.defenses[Game.state.map.path[t.isOn]].stepOn(t);
		    }
		    t.wasOn = t.isOn;
		    let next = Game.state.map.meta[Game.state.map.path[i+1]];
		    t.comingFrom = t.heading;
		    if(next){
			if(next.y < tile.y) {t.heading = 0;}
			if(next.x > tile.x) {t.heading = 1;}
			if(next.y > tile.y) {t.heading = 2;}
			if(next.x < tile.x) {t.heading = 3;}
		    }else{
			t.heading = 4;
		    }
		    t.beforeCenter = true;
		}
		return false;
	    }
	})
    }
    die(){
	let s = this;
	let id = Game.state.opponents.findIndex(function(item){return item.id == s.id;});
	Game.state.opponents.splice(id, 1);
    }
    explode(){
	Game.state.frites--;
	this.die();
    }

}
