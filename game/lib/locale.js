import Text from '../locale/empty.js';

export default class { 
    constructor(lang = "fr"){
	this.text = Text;
	this.changeLang(lang);
    }
    
    changeLang(lang = "fr"){
	this.currentLang = lang;
	
	let text = this.text;
	$.getJSON( './game/locale/'+lang+'.json', function( json ) {
	    $.each(json, function(i, v){
		text[i] = v;
		});
	});
    }

    getText(slug){
	return (this.text[slug] === undefined ? 'LocError:'+slug : this.text[slug]);
    }
}
