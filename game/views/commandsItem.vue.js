import {Game} from '../lib/game.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default {
    data: function (){
      return{
   	  text : Game.locale.text,
      }
	},
	computed:{
		getScreenWidth:function(){
			return window.screen.width;
		},
		headerFontSize:function(){
			return {
				fontSize:this.getScreenWidth<1000?'10px':'30px'
			}
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
		<div class="col-3 col-sm-12" :style="headerFontSize">
			<b>{{text.itemMenu}}</b>
		</div>
		<div class="col-3 col-sm-6">
			{{ text[defense().name] }}
		</div>
		<div class="col-3 col-sm-6"  v-on:click="defense().sell()">
			{{ text.sell }}
					{{ Math.round(defense().price / 2)}} $
		</div>
		<div class="col-3 col-sm-6">
			<div v-if="defense().name == 'potato_field'" v-on:click="defense().harvest()">
				{{ text.harvest }}
			</div>
			<div v-if="defense().name == 'patator' || defense().name == 'sniper' && defense().currentUpgrade <  2"
			v-on:click="defense().upgrade()">
			{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
			</div>
		</div>
		<div class="col-3 col-sm-6" v-on:click="defense().upgrade()">
			<div v-if="defense().name == 'potato_field' && defense().currentUpgrade <  2">
			{{ text.upgrade }}<br>{{ defense().upgradeCosts[defense().currentUpgrade]}} $
			</div>			
		</div>	
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6" v-if="getScreenWidth<1000">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
