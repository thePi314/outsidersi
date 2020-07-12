<?php

    use Controllers\Session;
    use Controllers\WLRouter;
use Pages\AboutPage;
use Pages\FaqPage;
use Pages\GalleryPage;
use Pages\HomePage;
use Pages\NewsPage;

Session::start();

    WLRouter::route('/',function(){
        header('Location: /home');
    });

    WLRouter::route('/home',function(){
        echo HomePage::buildPage();
    });
    WLRouter::route('/about',function(){
        echo AboutPage::buildPage();
    });
    WLRouter::route('/news',function(){
        echo NewsPage::buildPage();
    });
    WLRouter::route('/news/@number',function($newsId){
        Session::set('news-id',$newsId);
        echo 'News: '.$newsId;
    });


    WLRouter::route('/faq',function(){
        echo FaqPage::buildPage();
    });
    WLRouter::route('/gallery',function(){
        echo GalleryPage::buildPage();
    });
?>