import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';
import onresizeClass from '../mixins/onresizeClass.js';

export default  {
	mixins:[onresizeClass],
    data: function (){
      return{
	  	iGame : Game,
		text : Game.locale.text
      }
	},
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div :style={fontSize:commandsHeaderFontSize} :class=commandsHeaderClass>
			<b>{{text.selectedMenu}}</b>
		</div>

		<div :class=commandClass  v-on:click="iGame.buy('patator')">
			{{ text.patator }}
			50$
		</div>

		<div :class=commandClass v-on:click="iGame.buy('sniper')">
			{{ text.sniper }}	
			125$		
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass>
			
		</div>

		<div :class=commandClass  v-on:click="iGame.buy('potato_field')">
			{{ text.potato_field }}
			150$
		</div>

		<div :class=commandClass v-if="!isHorizontal">
				
		</div>

		<life-tile></life-tile>
	</div>
	
    `
}
