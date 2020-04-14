import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import commandLifeTile from './commandLifeTile.vue.js';

export default  {
    data: function (){
      return{
   	  text : Game.locale.text,
	   game : Game.state
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
		<div class="col-3 col-sm-12" :style="headerFontSize">
			<b>{{text.lastMenu}}</b>
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6" v-on:click="loseLife()">
			{{text.eat}}
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6">
			
		</div>
		<div class="col-3 col-sm-6" v-if="getScreenWidth<1000">
				
		</div>
		<life-tile></life-tile>
	</div>
	
    `
}
