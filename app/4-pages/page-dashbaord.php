<?php

namespace Pages;
use Controller\Page;
use Controllers\Session;
use Controllers\WLBlade;
use Models\User;

class DashboardPage extends Page {
    protected static $hasHeader = false;
    protected static $hasFooter = false;

    protected static function getScripts(){
        return [
            '/public/scripts/pages/dashboard/component-users.js',
            '/public/scripts/pages/dashboard/component-faq.js',
            '/public/scripts/pages/dashboard/component-merch.js',
            '/public/scripts/pages/dashboard/component-news.js',
            '/public/scripts/pages/dashboard/component-scheduler.js',
            '/public/scripts/pages/dashboard/component-gallery.js',
            '/public/scripts/pages/page-dashboard.js',
        ];
    }

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-dashboard.css'
        ];
    }

    protected static function render(){
        //$user = User::fetchById(Session::get('user-id'));

        return WLBlade::render('pages.page-dashboard');
    }
}