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
    template : `<div id="audio-btn" v-on:click="audio.toggle()">
	    <i v-if="audio.paused" class="fas fa-volume-off"></i>
	    <i v-else class="fas fa-volume-up"></i>
        
    </div>`
  })

