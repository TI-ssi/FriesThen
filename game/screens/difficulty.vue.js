import {Game} from '../lib/game.js';
import '../items/return_home.vue.js';

export default {
    data: function (){
      return{
        game : Game.state,
        text : Game.locale.text,
        styles: this.getStyles(window.innerWidth/window.innerHeight)

      }
    },
    beforeDestroy : function(){
	//this is called on "start" button press
	//load map before destroying screen and creating next screen
	$.getJSON( './game/maps/maps.json', function( json ) {            
            Game.state.map = json[Game.state.currentMap-1];
        })
    },
    methods:{
	loadMap:function(map_ind){
            //if no map_ind then random          
            if(!map_ind)
            {
              let mapCount=Game.state.mapCount; 
              map_ind = 1 + Math.floor(mapCount*Math.random());
            } 

	    //register map_ind for loading purpose later
            Game.state.currentMap=map_ind;
        
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
            maxHeight:screenRatio>1?'40vmin':'48vmin'
          },
          mapOptionStyle:{
            fontSize:'3vmin',
            padding:'1vmin'
          },
          btnSuccessStyle:{
            fontSize:'3vmin',
          },
          btnSecStyle:{
            width:'40vmin',
            fontSize:'3vmin'
          }
        }
      }
    },
    template : `
          <div class="d-flex justify-content-center align-items-center">
            <div id="start-screen" class="text-center d-flex-col justify-content-center align-items-center">
         	 <div id="map_selection" :style=styles.mapSelectStyle> 
        <span id="map_title" :style=styles.mapTitleStyle>{{text.selectMap}}</span>
	
                    <div id="map_container" :style=styles.mapContainerStyle>
                      <div class="map_option" :style=styles.mapOptionStyle v-for="indmap in game.mapCount">                    
                        <b>
	<span v-if="indmap == game.currentMap">*</span>
                          {{ text.map }} #{{ indmap }} &nbsp;
                          <button v-on:click="loadMap(indmap)">
                            {{text.select}}
                          </button>
                        </b>
        </div>
	              <div class="map_option" :style=styles.mapOptionStyle>                    
                        <b>
	                  <button :style=styles.btnSuccessStyle v-on:click="loadMap(0)" class="btn btn-success">{{ text.alea }}</button>
        </b></div>
        </div>                    
        </div><br>
	

                  
                  <div class="mt-2 mt-md-5">
                    <button v-on:click="game.screen = 'play'" class="btn btn-success btn-lg">
                      {{ text.go }}
                    </button>
                  </div>
                  <div class="mt-2 mt-md-5">
     	            <btn-return-home style="margin:3vmin"></btn-return-home>
                  </div>
            </div>
          </div>`
  } 
