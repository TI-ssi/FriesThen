import {Game} from '../lib/game.js';

import tile from './playTile.vue.js';
import opponent from './opponent.vue.js';

export default {
    data: function (){
      return{
		game : Game.state,
		text: Game.locale.text,
		iGame : Game,
		widthScreen:window.innerWidth,
		heightScreen:window.innerHeight,
		playBoxClass: this.getPlayBoxClass(window.innerWidth/window.innerHeight>1)
      }
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
			this.widthScreen=window.innerWidth;
			this.heightScreen=window.innerHeight;
			let isHorizontal=window.innerWidth/window.innerHeight>1;
        	this.playBoxClass=this.getPlayBoxClass(isHorizontal);
		},
		getPlayBoxClass:function(isHorizontal){
			if(isHorizontal)
				return "col-9 col-sm-9 col-md-9 col-lg-9 text-center h-100";
			else
				return "text-center h-75 w-100"
		},
		getDims(isRow){
			let rowWidth=0;
			let rowHeight=0;
			if(this.widthScreen>this.heightScreen)
			{
				rowHeight=Math.round(this.heightScreen*.91/8);
				rowWidth=Math.round(rowHeight*6);
			}
			else
			{
				if(8*this.widthScreen/6>0.75*this.heightScreen)
				{
					rowHeight=Math.round(0.75*this.heightScreen*.91/8);
					rowWidth=Math.round(rowHeight*6);
				}
				else{
					rowWidth=Math.round(this.widthScreen*.91);
					rowHeight=Math.round(rowWidth/6);
				}				
			}
			if(!isRow)
				rowHeight*=8
			return {
				width:rowWidth+'px',
				height:rowHeight+'px'
			}
		}

	},
    components:{
	tile : tile,
	opponent : opponent
    },
	template : `
	<div id="play-box" :class=playBoxClass v-on:click="iGame.selected(0,0)">
					
		<div class="row" v-for="x in 8" :style="getDims(1)">
		<div v-if="game.rainTime && x == 1" id="oil_rain" :style="getDims(0)"></div>
		<tile v-for="y in 6"
				class="col-2 h-100"
				v-bind:x="x"
			v-bind:y="y">
		</tile>
		</div>
		
		<opponent v-for="(opp, id) in game.opponents" v-bind:self="opp" :key="id"></opponent>
	</div>`
}
