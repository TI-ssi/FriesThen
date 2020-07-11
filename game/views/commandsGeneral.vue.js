import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import Opponent from '../opponents/opponent.js';
import commandLifeTile from './commandLifeTile.vue.js';
import onresizeClass from '../mixins/onresizeClass.js';

export default {
	mixins:[onresizeClass],
    data: function (){
	return{
	    iGame: Game,
	    wave: Wave,
		game : Game.state,
		text: Game.locale.text
      }
	},
	methods:{
		play : function(){
			if(this.game.paused){
				var g = this.game;
					
				this.game.paused = false;
				this.wave.start(this.game);
			}
		}
    },
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div :style={fontSize:commandsHeaderFontSize} :class=commandsHeaderClass>
			<b>{{text.generalMenu}}</b>
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class="commandClass" v-on:click="play();">			
			<span v-if="game.paused" class="fas fa-play"></span>&nbsp
			<b>{{ text.wave }}: {{ wave.waveNb }}</b>
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass v-if="!isHorizontal">
				
		</div>

		<life-tile></life-tile>
	</div>	
    `
}
