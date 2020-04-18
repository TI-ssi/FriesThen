export default{
    data:function(){
        return{
            isHorizontal:window.innerWidth/window.innerHeight>1,
            commandsHeaderFontSize: window.innerWidth/window.innerHeight>1?'5vmin':'3vmin',
            commandClass:this.getCommandClass(window.innerWidth/window.innerHeight>1),
            commandsHeaderClass:this.getCommandsHeaderClass(window.innerWidth/window.innerHeight>1)
        }
    },
    created(){
		//window.addEventListener("resize", this.handleChange);
		$(window).on("resize orientationchange", this.handleChange);
	},
	destroyed(){
		//window.removeEventListener("resize", this.handleChange);
		$(window).off("resize orientationchange", this.handleChange);
    },
    methods:{

        handleChange(){
			let isHorizontal=window.innerWidth/window.innerHeight>1;
			this.isHorizontal=isHorizontal;
			this.commandClass=this.getCommandClass(isHorizontal);
            this.commandsHeaderClass=this.getCommandsHeaderClass(isHorizontal);
            this.commandsHeaderFontSize=isHorizontal?'5vmin':'3vmin';
		},
		getCommandClass:function(isHorizontal){
			let cls=""
			if(isHorizontal)
				cls += "col-6 h-25";
			else
				cls +=  "col-3 h-50";
				
			cls += ' d-flex justify-content-center align-items-center';
			return cls;
		},
		getCommandsHeaderClass:function(isHorizontal){
			let cls=""
			if(isHorizontal)
				cls += "col-12 h-25";
			else
				cls +=  "col-3 h-50";
				
			cls += ' d-flex justify-content-center align-items-center bg-dark text-white';
			return cls;
		}
    }
    
}