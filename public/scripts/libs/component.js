class Component {
    constructor(){};

    static name = '';

    static init(){
        this.modalsSetup();
        this.functions();
    }
    static functions(){
        console.log(this.name);
    }

}