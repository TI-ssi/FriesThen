import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import commandLifeTile from './commandLifeTile.vue.js';
import onresizeClass from '../mixins/onresizeClass.js';

export default  {
	mixins:[onresizeClass],
    data: function (){
      return{
   	  	text : Game.locale.text,
		game : Game.state
      }
	},
    methods:{
		loseLife: function(){
			this.game.frites--;
			if(this.game.frites <= 0){
				Wave.start(Game.state);
				Game.state.screen='game-over';
			}
		}
    },
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div :style={fontSize:commandsHeaderFontSize} :class=commandsHeaderClass>
			<b>{{text.lastMenu}}</b>
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass v-on:click="loseLife()">
			{{text.eat}}
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
