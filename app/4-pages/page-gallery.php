<?php

namespace Pages;
use Controller\Page;
use Controllers\WLBlade;

class GalleryPage extends Page {
    protected static function getScripts(){
        return [
            '/public/scripts/pages/page-home.js'
        ];
    }

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-home.css'
        ];
    }

    protected static function render(){
        return 'Gallery';
    }
}