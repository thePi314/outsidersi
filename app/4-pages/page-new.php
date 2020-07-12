<?php

namespace Pages;
use Controller\Page;
use Controllers\Session;
use Controllers\WLBlade;
use stdClass;

class NewPage extends Page {
    protected static function getScripts(){
        return [
            '/public/scripts/pages/page-new.js'
        ];
    }

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-new.css'
        ];
    }

    protected static function getNewsData() {
        $newsData = new \stdClass();
        
        $newsData->id = Session::get('news-id');

        return $newsData;
    }

    protected static function render(){
        return WLBlade::render('pages.page-new');
    }
}