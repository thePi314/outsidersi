<?php

namespace Pages;
use Controller\Page;
use Controllers\WLBlade;

class SchedulerPage extends Page {
    protected static function getScripts(){
        return [
            '/public/scripts/pages/page-scheduler.js'
        ];
    }

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-scheduler.css'
        ];
    }

    protected static function render(){
        return WLBlade::render('pages.page-scheduler');
    }
}