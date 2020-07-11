import {Game} from '../lib/game.js';
import '../items/lang_selector.vue.js';

export default {
    data: function (){
      return{
        game : Game.state,
        text : Game.locale.text
      }
    },
    methods:{
      commencerPartie:function(){
        this.game.screen="play";
      },
      retourSelection:function(){
        this.game.map=[];
        this.game.screen="start";
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <btn-select-lang class="text-right fixed-top mt-4 mr-3 mr-md-5"></btn-select-lang>
            <div id="start-screen" class="text-center d-flex-col justify-content-center align-items-center">
                  <div>
                    <h3>{{ text.selection+game.currentMap }}</h3>
                  </div><br /><br />
                  
                  <div class="mt-2 mt-md-5">
                    <button v-on:click="commencerPartie()" class="btn btn-success btn-lg">
                      {{ text.go }}
                    </button>
                  </div>
                  <div class="mt-2 mt-md-5">
                    <button v-on:click="retourSelection()" class="btn btn-secondary btn-lg">
                      {{ text.returnSelection }}
                    </button>
                  </div>
            </div>
          </div>`
  } 
