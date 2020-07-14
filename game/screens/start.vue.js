import {Game} from '../lib/game.js';
import '../items/lang_selector.vue.js';

export default {
    data: function (){
      return{
      game : Game.state,
      text : Game.locale.text,
      styles: this.getStyles(window.innerWidth/window.innerHeight)
      }
    },
    created(){
      window.addEventListener("resize", this.handleChange);
    },
    destroyed(){
      window.removeEventListener("resize", this.handleChange);
    },
    mounted(){
      $.getJSON( './game/maps/maps.json', function( json ) {
        Game.state.mapCount=json.length;
      })
    },
    methods:{

      handleChange(){
        this.styles=this.getStyles(window.innerWidth/window.innerHeight);
      },
      getStyles:function(screenRatio){
        return {
          welcomeTitleStyle:{
            fontSize:'6vmin',
            marginBottom: screenRatio>1?'1vmin':'1vmax'
          },
          welcomeDescStyle:{
            fontSize:'4vmin',
            marginBottom: screenRatio>1?'2vmin':'2vmax'
          },
          mapSelectStyle:{
            width: screenRatio>1?1/screenRatio*55+'vmax':'60vmin',
            height: screenRatio>1?'45vmin':'35vmax',
          },
          mapTitleStyle:{
            fontSize:'4vmin',
            marginBottom:'3vmin'
          },
          mapContainerStyle:{
            width: '80%',
            padding:'2vmin',
            maxHeight:screenRatio>1?'30vmin':'38vmin'
          },
          mapOptionStyle:{
            fontSize:'3vmin',
            padding:'1vmin'
          },
          btnSuccessStyle:{
            fontSize:'3vmin',
            margin: screenRatio>1?'3vmin':'6vmax'
          },
          btnSecStyle:{
            width:'40vmin',
            fontSize:'3vmin'
          }
        }
      }
    } ,
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <btn-select-lang class="text-right fixed-top mt-4 mr-3 mr-md-5"></btn-select-lang>
            <div id="start-screen" class="text-center">
                  <div>
                    <b><div :style=styles.welcomeTitleStyle>{{ text.welcome_title }}</div></b>
                    <div :style=styles.welcomeDescStyle>{{ text.welcome_desc }} </div>
                  </div>
	          <button :style=styles.btnSecStyle v-on:click="game.screen = 'difficulty'" class="btn btn-success btn-lg">{{ text.go }}</button>
                  <button :style=styles.btnSecStyle v-on:click="game.screen = 'credits'" class="btn btn-secondary btn-lg">{{ text.credits }}</button>
            </div>
          </div>`
  } 
