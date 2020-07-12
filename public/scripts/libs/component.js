class ScriptComponent {
    static name    = '';
    static viewURL = null;

    static async init(location){
        await fetch(location)
        .then(res => res.text())
        .then(data => {
            location.innerHTML = data;
        })

        this.functions();
        return true;
    }

    static functions(){
        console.log(this.name);
    }
}

var ScriptRouter = {
    components: [],
    renderLocation: null,
    run: function (current) {
        for (let ind = 0; ind < ScriptRouter.components.length; ind++) {
            if (current == ScriptRouter.components[ind].name) { 
                return ScriptRouter.components[ind].init(ScriptRouter.renderLocation);
            }
        }

        return false;
    }
};