import {Game} from '../lib/game.js';

import playView from '../views/playView.vue.js';
import commandsView from '../views/commandsView.vue.js';

export default {
    data: function (){
      return{
          game : Game.state,
	  audio : Game.audio,
          tick : Game.tick,
      }
    },
      mounted: function (){
          this.audio.setMusic('defense-loop.mp3');
      },
      components: {
          playView : playView,
          commandsView : commandsView
      },
      template : `
        <div class="row m-auto">
      		  <play-view></play-view>
		  <commands-view></commands-view>
            </div>`
    
  }

