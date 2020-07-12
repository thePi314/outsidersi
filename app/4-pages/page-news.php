<?php

namespace Pages;
use Controller\Page;
use Controllers\WLBlade;

class NewsPage extends Page {
    protected static function getScripts(){
        return [
            '/public/scripts/pages/page-home.js'
        ];
    }

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-news.css'
        ];
    }

    protected static function render(){
        return WLBlade::render('pages.page-news');
    }
}