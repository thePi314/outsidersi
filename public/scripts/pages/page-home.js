//page home

function createPublikumeRow(publikumeAmount) {
    let row = document.createElement('row');
    //background-layer row v-bottom publikume-layer
    row.classList.add('background-layer');
    row.classList.add('row');
    row.classList.add('v-bottom');
    row.classList.add('publikume-layer');

    
    for(let ind=0;ind < publikumeAmount;ind++) {
        let publikum = document.createElement('img');
        let position = (ind == 0) ? 'left' : ((ind == publikumeAmount-1) ? 'right' : 'middle');
        
        publikum.classList.add('publikume');
        publikum.src = './public/images/publikume-'+position+'.png';
        publikum.setAttribute('delay','0.'+Math.round(Math.random()*10)+'s');

        let x = 64 + Math.random() * (window.innerWidth - 64);

        switch(position){
            case 'left':
                x = 0;
                break;
            
            case 'right':
                x = window.innerWidth - publikum.width;
                break;
        }
        
        row.append(publikum);
    }

    return row;
}

/* Init Dashboard ScriptRouter */
afterload_execution.push(function(){
    ScriptRouter.components = [
        ComponentRole1,
        ComponentRole2,
        ComponentRole3,
        ComponentRole4
    ];
});

afterload_execution.push(function(){
    document.querySelector('.fullscreen').append(createPublikumeRow(8));
    document.querySelector('.fullscreen').append(createPublikumeRow(7));
    document.querySelector('.fullscreen').append(createPublikumeRow(6));
    document.querySelector('.fullscreen').append(createPublikumeRow(5));
})

afterload_execution.push(function(){
    let actors = document.querySelectorAll('.actor');

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

afterload_execution.push(function(){
    let publikumes = document.querySelectorAll('.publikume');

    publikumes.forEach(publikume => {
        publikume.addEventListener('animationend',()=>{
            if(!publikume.classList.contains('slide-up-16') && !publikume.classList.contains('slide-down-16')){
                publikume.classList.add('slide-up-16');
            }
            else{
                if(publikume.classList.contains('slide-up-16')) {
                    publikume.classList.remove('slide-up-16');
                    publikume.classList.add('slide-down-16');
                }
                else{
                    if(publikume.classList.contains('slide-down-16')) {
                        publikume.classList.add('slide-up-16');
                        publikume.classList.remove('slide-down-16');
                    }
                }
            }
        })
    })
});

/* Init SPA loader segment switch */
afterload_execution.push(function(){
    document.querySelector('.actor-perview>.background').addEventListener('click',()=>{
        document.querySelector('.actor-perview').classList.remove('show');

        document.querySelector('.actor.hide').classList.remove('hide');
        window.location.hash = '';
    })
})

afterload_execution.push(function(){
    let view_segment = document.querySelector('.actor-perview > .content');
    let buttons      = document.querySelectorAll('.actors-view > .actor');

    buttons.forEach(button => {
        button.addEventListener('mousedown',async (event)=>{
            event.preventDefault();
            if (button.classList.contains('scaled-up')) {
                await fetch(button.getAttribute('route'))
                .then(res => {return res.text()})
                .then(data => {
                    view_segment.innerHTML = data;
                    button.classList.add('hide');
                    let href = button.getAttribute('route').split('/');
                    ScriptRouter.run(href[href.length-1]);

                    window.location.hash = href[href.length-1];

                    document.querySelector('.actor-perview').classList.add('show');
                });
            }
        });
    });
});