<?php

    use Controllers\Session;
    use Controllers\WLRouter;
    use Pages\AuthPage;
    use Pages\DashboardPage;
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

    WLRouter::route('/login',function(){
        echo AuthPage::buildPage();
    });
    WLRouter::route('/dashboard',function(){
        if( Session::get('user-id') != null )
            echo DashboardPage::buildPage();
        else
            header('Location: /login');
    });

    exit(200);
?>