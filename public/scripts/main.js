const HOST = 'http://' + window.location.host;

let preload_execution   = [];
let afterload_execution = [];

let ScriptRouter = {
    components: [],
    run: function(current) {
        for( let ind = 0 ; ind < ScriptRouter.components.length ;ind++ ){
            if(current == ScriptRouter.components[ind].name){
                ScriptRouter.components[ind].init();
                return true;
            }
        }

        return false;
    }
};

window.onload = () => {
    afterload_execution.forEach(funct => funct());
}