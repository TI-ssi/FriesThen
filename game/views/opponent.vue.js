import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';
import broken_glass from '../defenses/broken_glass.js';

export default {
    props:['self'],
    data:function(){
	return {
	       game : Game.state,
	    iGame : Game,
	    wave: Wave
	}
    },
    computed:{
        width: function() { return this.game.map.meta[this.game.map.path[0]].w / 2},
        height: function(){ return this.game.map.meta[this.game.map.path[0]].h / 2},     
    },
    methods:{
        imageSource: function(){
            let imgSrc="img/mouse.png";
            switch(this.self.animalId)
            {
                case 1: imgSrc='img/bee.png';break;
                case 2: imgSrc='img/bear.png';break; 
                case 3: imgSrc='img/raccoon.png';break;
            }
            return imgSrc;
        }   
    },
    template:`
	<div class="opponent" style="background:transparent" :style="{top:self.y+'px',left:self.x+'px', zIndex:'1000', width:width+'px', height:height+'px'}" v-on:click="iGame.selected(game.map.path[self.isOn])">
        <div class="lifeBar" :style="{width:self.life/self.startingLife*100+'%'}">
        </div>
        <img :src="imageSource()" width="100%"/>
    </div>
    `
}
