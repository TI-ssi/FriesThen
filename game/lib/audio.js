export default class { 
    constructor(){

	this.player = document.createElement('AUDIO');

	this.setMusic('menu.mp3');
	this.player.play();

	this.paused = this.player.paused;
	this.player.autoplay = !this.paused;
    }

    setMusic(music){
	this.music = music;
	this.player.src = './game/musics/'+this.music;
    }

    toggle(){
	if(this.paused){
	    this.player.play();
	} else {
	    this.player.pause();
	}
	this.paused = !this.paused;
	this.player.autoplay = !this.paused;
    }
    
}
