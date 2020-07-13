import {Game} from '../lib/game.js';
import {Wave} from '../lib/wave.js';

import '../items/return_home.vue.js';

export default {
    data: function (){
      return{
        game : Game.state,
	  text : Game.locale.text,
	  wave : Wave
      }
    },
    mounted: function (){
	this.wave.stop(this.game);
    },
    computed:{
      final: function(){ 
        if(this.game.frites > 0){
          return this.text.win;
        } else {
          return this.text.lose;
        }
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <div id="start-screen" class="text-center">
                  <div>
        {{ final }}!!!
    <br />
    {{ text.final_fries }} {{ game.frites }}
                  </div>
		  <btn-return-home class="mt-5"></btn-return-home>
	    </div>
          </div>`
  }

