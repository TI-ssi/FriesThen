import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';
import onresizeClass from '../mixins/onresizeClass.js';

export default {
	mixins:[onresizeClass],
    data: function (){
      return{
		text : Game.locale.text
      }
	},
    components:{
	lifeTile: commandLifeTile
	},
    methods:{
		defense : function(){ return Game.state.defenses[Game.state.selectedTile]; }
    },
    template: `
	<div>
		<div :style={fontSize:commandsHeaderFontSize} :class=commandsHeaderClass>
			<b>{{text.itemMenu}}</b>
		</div>

		<div :class=commandClass>
			{{ text[defense().name] }}
		</div>

		<div :class=commandClass  v-on:click="defense().sell()">
			{{ text.sell }}
					{{ Math.round(defense().price / 2)}} $
		</div>

		<div :class=commandClass v-if="defense().name == 'potato_field'" v-on:click="defense().harvest()">
			{{ text.harvest }}
		</div>

		<div :class=commandClass v-if="defense().name == 'patator' || defense().name == 'sniper' && defense().currentUpgrade <  2"
		v-on:click="defense().upgrade()">
		{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
		</div>
		
		<div :class=commandClass v-on:click="defense().upgrade()">
			<div v-if="defense().name == 'potato_field' && defense().currentUpgrade <  2">
			{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
			</div>			
		</div>	
		<div :class=commandClass>
			
		</div>
		<div :class=commandClass v-if="!isHorizontal">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
