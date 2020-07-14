import {Game} from './game/lib/game.js';
import Locale from './game/lib/locale.js';

var vm = new Vue({
    el: '#app',
    components : {
    },
    computed: {
	screen() {
	    /**
	      * cant use var directly in import as it didnt see its changes
	      * probably because this is computed.
	      * creating the var screen 
	      * did the trick to see change of it
	      * I may doing it the wrong way here but didnt find another working way at the time
	      */
	    let screen = this.game.screen;
	    return () => import(`./game/screens/${screen}.vue.js?v=1`);
	}
    },
    beforeCreate: function(){
	const locale = new Locale();
	Game.locale = locale;
    },
    created: function(){
	Game.initialState = $.extend(true, {}, Game.state);
    },
    data: {
	game : Game.state,
    }
})
