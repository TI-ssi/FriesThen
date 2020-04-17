import {Game} from '../lib/game.js';
import '../items/return_home.vue.js';

export default {
    data: function (){
      return{
	text : Game.locale.text
      }
    },
    template : `
    <div class="d-flex justify-content-center align-items-center" style="font-size:3vmin">
      <div id="start-screen" class="text-center">
        <div>
          <b>{{ text.createdBy }}</b><br />
          Patrick G. Leblanc
        </div><br/>

        <div>
          <b>{{ text.devs }}</b><br />        
          Patrick G. Leblanc<br />
          William Lapierre<br />
          Xavier Bégin
        </div><br>

        <div>
          <b>{{ text.graphics }}</b><br />
          William Lapierre
        </div><br />

        <div>
          <b>{{ text.thanks }}</b> <br />
          Discord Anime-Ultime
        </div><br />

        <btn-return-home style="margin:3vmin"></btn-return-home>
        
      </div>
    </div>`
  }

