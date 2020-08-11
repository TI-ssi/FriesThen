import {Game} from '../lib/game.js';

export default
Vue.component('audio' , {
    data: function (){
      return{
	music: Game.audio.music,
      }
    },
    template : `<div>
	<audio autoplay loop>
	        <source src="./game/musics/{music}" type="audio/mpeg">
	</audio> 
    </div>`
  })

