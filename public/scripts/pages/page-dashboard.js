//page dashboard

/* Init Dashboard ScriptRouter */
afterload_execution.push(function(){
    ScriptRouter.components = [
        ComponentMerch,
        ComponentFAQ,
        ComponentGallery,
        ComponentNews,
        ComponentScheduler,
        ComponentUsers
    ];
});

/* Init Dashboard segment switch */
afterload_execution.push(function(){
    let view_segment = document.getElementById('dashboard-content');
    let buttons      = document.querySelectorAll('.sidebar > .element.button');
    
    buttons.forEach(button => {
        button.addEventListener('click',async (event)=>{
            event.preventDefault();
            await fetch(button.href)
            .then(res => {return res.text()})
            .then(data => {
                view_segment.innerHTML = data;
                
                let href = button.href.split('/');
                ScriptRouter.run(href[href.length-1]);

                window.location.hash = href[href.length-1];
            });
        });
    });
});