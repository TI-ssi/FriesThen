import {Game} from '../lib/game.js';

export default{
    props:['x', 'y'],
    data: function (){
      return{
	game : Game.state,
	text : Game.locale.text,  
	iGame: Game
      }
    },
    computed: {
    	      isSelected:function(){
		return  this.game.selectedTile == this.x+'-'+this.y;
	      },
	      isPath:function(){
	       return this.game.map.path.includes(this.x+'-'+this.y);
	       //&& !this.isSelected; //to prevent overpassing selection
	      },
	      isFirst:function(){
	       return this.game.map.path[0] == (this.x+'-'+this.y)
	       ;//&& !this.isSelected; //to prevent overpassing selection
	      },
	      isLast:function(){
	       return this.game.map.path[this.game.map.path.length-1] == (this.x+'-'+this.y)
	       ;//&& !this.isSelected; //to prevent overpassing selection
	      },
	      id:function(){
	        return this.x+'-'+this.y;
	      },
    },
    methods:{
		hasItem:function(){
	        if(!(this.game.defenses[this.id] === undefined)){
		       return this.game.defenses[this.id];
		}else{
			return false;
		}
		//&& !this.isSelected;
		},
		rangeStyle:function(){
			let u = this.hasItem().currentUpgrade;
			let name=this.hasItem().name;
			let baseSizeInc=0, upgradeBonus=100;
			switch(name){
				case 'patator': baseSizeInc=300;break;
				case 'sniper': baseSizeInc=500;
			}
			let sizeInc = baseSizeInc+upgradeBonus*u;
			let offsetInc = -(sizeInc - 100)/2;
			return {
				background:`rgba(${u*80}, ${255-u*80}, 128, 0.5)`,
				width: sizeInc+'%',
				height: sizeInc+'%',
				top: offsetInc +'%',
				left: offsetInc +'%'
			}
		},
		firingBarWidth:function(){
			if(this.hasItem().name=='patator')
				return this.hasItem().passedTick/90*100+'%';
			else{
				if(this.hasItem().name=='sniper')
					return this.hasItem().passedTick/150*100+'%';
			}
		},

		defenseStyle:function(){
			let backgroundUrl = "";
			let defensename=this.hasItem().name;
			if(defensename=='patator'){
				switch(this.hasItem().currentUpgrade){
					case 0: backgroundUrl = 'img/patator.png';break;
					case 1: backgroundUrl = 'img/patator-v2.png';break;
					case 2: backgroundUrl = 'img/patator-v3.png';
				}
			}
			else if(defensename == 'sniper')
				backgroundUrl='img/sniper.png';

			else if(defensename == 'potato_field')
				backgroundUrl='img/champ_patate.png';

			return {
				"background-image": 'url('+backgroundUrl+')',
				transform:'rotate('+this.hasItem().rot+'deg)'
			}
		}
    },
    mounted:function(){
	if(this.isPath){
		Game.state.map.meta[this.id] = {
		    x : this.$refs[this.id].offsetLeft - ( this.$refs[this.id].offsetWidth / 4 ),
		    y : this.$refs[this.id].offsetTop - ( this.$refs[this.id].offsetHeight / 4 ),
		    w : this.$refs[this.id].offsetWidth,
		    h : this.$refs[this.id].offsetHeight,
		    xx: this.$refs[this.id].offsetLeft + ( this.$refs[this.id].offsetWidth / 4 * 3 ),
		    yy: this.$refs[this.id].offsetTop + ( this.$refs[this.id].offsetHeight /4 * 3 )
		}
	}
	
    },
    template:`
    <div class="p-0" v-bind:id="id" v-bind:ref="id"  v-on:click.stop="iGame.selected(x, y)" v-bind:class="{'pathTile' : isPath && !isSelected, 'bg-secondary' : isSelected, 'firstPathTile' : isFirst && !isSelected && !hasItem(), 'lastPathTile' : isLast && !isSelected, 'defense': hasItem()}">
        <div class="row col m-auto p-0" v-if="hasItem()" v-bind:class="hasItem().name" v-bind:style="defenseStyle()">
	<div v-if="hasItem().name == 'potato_field'">
	{{ hasItem().count }}
	</div>
	<span v-else>&nbsp;</span>
	</div>
	
	<div class="range"
	v-bind:style="rangeStyle()"	
	v-if="hasItem() && !isPath && isSelected" >&nbsp;</div>
        <div class="bg-secondary" v-if="hasItem() && !isPath" style="width:50%;margin:auto;">
	    <div class="firingBar" v-bind:style="{width:firingBarWidth()}">
       	    </div>
	</div>
    	<span id="fry-count" v-else-if="isLast">{{ game.frites }}F</span>
	<div v-else-if="!hasItem()">&nbsp;</div>
    </div>
    `
}
