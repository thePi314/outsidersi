<?php

    use Controllers\Session;
    use Controllers\WLRouter;
    use Pages\HomePage;
    use Pages\SchedulerPage;

Session::start();

    WLRouter::route('/',function(){
        header('Location: /home');
    });
    WLRouter::route('/home',function(){
        echo HomePage::buildPage();
    });
    WLRouter::route('/scheduler',function(){
        echo SchedulerPage::buildPage();
    });
?>