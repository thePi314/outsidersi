// Init sidebar menu for mobile
afterload_execution.push(function(){
    let sidebar = document.getElementById('sidebar');
    let toggler = document.getElementById('sidebar-toggler');

    toggler.addEventListener('click',(event)=>{
        event.preventDefault();

        if(sidebar.classList.contains('collapsed'))
            sidebar.classList.add('collapsing-out');
        else
            sidebar.classList.add('collapsing-in');
    });

    sidebar.addEventListener('animationend',()=>{
        if(sidebar.classList.contains('collapsing-in')){
            sidebar.classList.remove('collapsing-in');
            sidebar.classList.add('collapsed');
        }
        else {
            if(sidebar.classList.contains('collapsing-out')){
                sidebar.classList.remove('collapsing-out');
                sidebar.classList.remove('collapsed');
            }
        }
    })
})