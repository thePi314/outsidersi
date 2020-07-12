/* Init Dashboard ScriptRouter */
/* afterload_execution.push(function(){
    ScriptRouter.components = [
        ComponentRole1,
        ComponentRole2,
        ComponentRole3,
        ComponentRole4
    ];
}); */

/* Characters animations init for desktop */
afterload_execution.push(function(){
    let actors = document.querySelectorAll('.welcome-screen > .desktop > .characters > .character');

    actors.forEach(actor=>{
        actor.addEventListener('animationend',()=>{
            if (actor.classList.contains('scaling-up')) {
                actor.classList.remove('scaling-up');
                actor.classList.add('scaled-up');
            }
            else {
                actor.classList.remove('scaling-down');
                actor.classList.remove('scaled-up');
            }
        })
        
        actor.addEventListener('mouseenter',()=>{
            if(!actor.classList.contains('scaling-up') && !actor.classList.contains('scaling-down'))
                actor.classList.add('scaling-up');
        });
        actor.addEventListener('mouseleave',()=>{
            if(actor.classList.contains('scaled-up')) {
                actor.classList.add('scaling-down');
                return;
            }


            if(actor.classList.contains('scaling-up')) {
                actor.classList.remove('scaling-up');
                actor.classList.add('scaling-down');
            }
        });

    });
});

/* Characters animations init for mobile */
afterload_execution.push(function(){
    let screen = document.querySelectorAll('.welcome-screen > .mobile > .characters');
    let actors = document.querySelectorAll('.welcome-screen > .mobile > .characters > .character');

        
});