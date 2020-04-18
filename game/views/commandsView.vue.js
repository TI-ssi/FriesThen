import {Game} from '../lib/game.js';

import commandGeneral from './commandsGeneral.vue.js';
import commandSelected from './commandsSelected.vue.js';
import commandPath from './commandsPath.vue.js';
import commandLast from './commandsLast.vue.js';
import commandItem from './commandsItem.vue.js';

export default{
    data: function (){
      return{
        game : Game.state,
        commandBoxClass: this.getCommandBoxClass(window.screen.width/window.screen.height>1)
      }
    },
    components:{
      general: commandGeneral,
      selected: commandSelected,
      mapPath: commandPath,
      lastPathTile: commandLast,
      itemTile: commandItem
    },
    created(){
      //window.removeEventListener("resize", this.handleChange);
      $(window).on("resize orientationchange", this.handleChange);
    },
    destroyed(){
      //window.removeEventListener("resize", this.handleChange);
      $(window).off("resize orientationchange", this.handleChange);
    },
    methods:{

      handleChange(){
        let isHorizontal=window.screen.width/window.screen.height>1;
        this.commandBoxClass=this.getCommandBoxClass(isHorizontal);
      },
      getCommandBoxClass:function(isHorizontal){
        if(isHorizontal)
          return "col-3 col-sm-3 col-md-3 col-lg-3 text-center h-100";
        else
          return "text-center h-25 col-12 col-sm-12 col-md-12 col-lg-12"
      }
  
    },
    template :`    
    <div id="commands-box" :class=commandBoxClass>	
     	<component class="row" v-bind:is="game.commandView"></component>  
    </div>
    `
}
