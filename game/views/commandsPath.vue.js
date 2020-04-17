import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';
import onresizeClass from '../mixins/onresizeClass.js';

export default  {
	mixins:[onresizeClass],
    data: function (){
      return{
		iGame : Game,
		game:Game.state,
		text : Game.locale.text
      }
	},
	methods:{
		rainCooldownStyle:function(){
			let barHeight=(1000-this.game.rainTime)/10;
			return {
				background:'rgba(80,180,0,0.2)',
				zIndex:1,
				position:'absolute',
				bottom:0,
				height:barHeight+'%',
				width:'100%'
			}
		}
	},
	
    components:{
	lifeTile: commandLifeTile
    },
    template: `
	<div>
		<div :style={fontSize:commandsHeaderFontSize} :class=commandsHeaderClass>
			<b>{{text.pathMenu}}</b>
		</div>
		<div :class=commandClass v-on:click="iGame.buy('broken_glass')">
		{{ text.broken_glass }}
		10$
		</div>
		<div :class=commandClass v-on:click="iGame.buy('oil_rain')" :disabled="game.rainTime">
		<div :style="rainCooldownStyle()"></div>
		{{ text.oil_rain }}	
		250$
		</div>
		<div :class=commandClass>
			
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
