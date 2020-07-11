import {Game} from './game/lib/game.js';
import Locale from './game/lib/locale.js';

import start from './game/screens/start.vue.js';
import credits from './game/screens/credits.vue.js';
import play from './game/screens/play.vue.js';
import end from './game/screens/end.vue.js';
import difficulty from './game/screens/difficulty.vue.js';

var vm = new Vue({
    el: '#app',
    components : {
	startScreen : start,
    playScreen : play,
    difficultyScreen: difficulty,
	gameOverScreen : end,
	creditScreen : credits,
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
