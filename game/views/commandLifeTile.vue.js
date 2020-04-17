import {Game} from '../lib/game.js';

export default {
    data : function () {
    	return {
	    iGame : Game,
	   game : Game.state,
	   commandClass:this.getCommandClass(window.innerWidth/window.innerHeight>1)
	}
	},
	created(){
		window.addEventListener("resize", this.handleChange);
	},
	destroyed(){
		window.removeEventListener("resize", this.handleChange);
	},
	methods:{
		handleChange(){
			let isHorizontal = window.innerWidth/window.innerHeight>1;
			this.commandClass=this.getCommandClass(isHorizontal)
		},
		getCommandClass:function(isHorizontal){
			let cls=""
			if(isHorizontal)
				cls += "col-6 h-25";
			else
				cls +=  "col-3 h-50";

			cls += ' text-right';
			return cls;
		}		
	},
    template: `
    	<div :class=commandClass v-on:click="iGame.selected(0,0)">
	    {{ game.cash }}$ <br />
	    <span v-if="game.commandView == 'general'">{{ game.frites }}F</span>
	    <span v-else> X </span>
	</div>

    `
}
