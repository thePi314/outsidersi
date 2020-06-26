<?php

namespace Pages;
use Controller\Page;
use Controllers\DataFetcher;
use Controllers\Session;
use Controllers\WLBlade;
use Models\User;

class AuthPage extends Page {
    protected static $hasHeader = false;
    protected static $hasFooter = false;

    protected static function getStylesheets(){
        return [
            '/public/styles/pages/page-auth.css'
        ];
    }

    protected static function fetch_data(){
        $data = DataFetcher::fetch_data();
        if (count($data) == 0) {
            $username = Session::get('username');
            $password = Session::get('password');
        }
        else {
            $data = (object) $data;
    
            $username = $data->username;
            $password = $data->password;
        }
        
        if($username === null && $password !== null)
            return 'No username entered!';
        
        if($username !== null && $password === null)
            return 'No password entered!';

        if($username === null && $password === null)
            return '';

        $result = User::login($username,$password);
        if( !$result ) {
            return 'Invalid data submited!';
        }

        return $result;
    }

    protected static function render(){
        $message = self::fetch_data();
        if( !is_string($message) ) {
            Session::set('username',$message->username);
            Session::set('user-id',$message->id);
            header('Location: /');
        }

        return WLBlade::render('pages.page-auth',['message' => $message]);
    }
}