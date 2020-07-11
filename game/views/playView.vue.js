import {Game} from '../lib/game.js';

import tile from './playTile.vue.js';
import opponent from './opponent.vue.js';

export default {
    data: function (){
      return{
	game : Game.state,
	  text: Game.locale.text,
	  iGame : Game
      }
    },
    components:{
	tile : tile,
	opponent : opponent
    },
    template : `<div id="play-box" class="col-sm-9 text-center" v-on:click="iGame.selected(0,0)">
    	       	     <div class="row" v-for="x in 8">
		       <tile v-for="y in 6"
		       	     class="col-2"
 		       	     v-bind:x="x"
			     v-bind:y="y">
		       </tile>
		     </div>
                     <opponent v-for="(opp, id) in game.opponents" v-bind:self="opp" :key="id"></opponent>
		</div>`
}
