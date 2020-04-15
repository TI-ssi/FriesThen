import {Game} from '../lib/game.js';
import '../items/return_home.vue.js';

export default {
    data: function (){
      return{
	text : Game.locale.text
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <div id="start-screen" class="text-center">
                  <div>
                    <b>{{ text.createdBy }}</b><br />
		    Patrick G. Leblanc
                  </div><br/>
                  <div>
                  <b>{{ text.devs }}</b><br />
                  </div>
        William Lapierre<br />
        Xavier Bégin
                  <div><br/>
                    <b>{{ text.graphics }}</b><br />
		    William Lapierre
                  </div><br />
                  <div>
		    <b>{{ text.thanks }}</b> <br />
		    Discord  Anime-Ultime
                  </div><br />
		  <btn-return-home class="mt-5 mt-sm-2"></btn-return-home>
            </div>
          </div>`
  }

