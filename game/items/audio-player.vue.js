import {Game} from '../lib/game.js';

export default
Vue.component('audioPlayer' , {
    data: function (){
	return {
	  audio : Game.audio
	  }
    },
    methods:{
	toggleSound:function(){
	    this.audio.toggle();
	}
    },
    created : function(){/*
	console.log($('#audioPlayer').prop('paused'));
	console.log(document.getElementById("audioPlayer"));
	Game.audio.playing = false;*/
    },
    template : `<div>
	<span v-on:click="audio.toggle()"><span v-if="audio.paused">no</span>sound</span>
    </div>`
  })

