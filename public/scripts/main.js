const HOST = 'http://' + window.location.host;

let preload_execution = [];
let afterload_execution = [];

let ScriptRouter = {
    components: [],
    run: function (current) {
        for (let ind = 0; ind < ScriptRouter.components.length; ind++) {
            if (current == ScriptRouter.components[ind].name) {
                ScriptRouter.components[ind].init();
                return true;
            }
        }

        return false;
    }
};

afterload_execution.push(function () {
    let icons = createIcons(64, 'mrlje', [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Z'
    ],0,48,window.innerWidth,window.innerHeight-128);

    let backNode = document.querySelector('body > .background-image'); 

    icons.forEach(icon => {
        backNode.append(icon)
    });
})

window.onload = () => {
    afterload_execution.forEach(funct => funct());
}