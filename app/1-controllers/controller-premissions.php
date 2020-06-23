<?php

namespace Controllers;

class Premissions{
    protected static $data = [
        'access-dashboard' => true,

        'user-access'     => true,
        'user-add'        => true,
        'user-edit'       => true,
        'user-remove'     => true,
        
        'role-access'     => true,
        'role-add'        => true,
        'role-edit'       => true,
        'role-remove'     => true,

        'group-access'     => true,
        'group-add'        => true,
        'group-edit'       => true,
        'group-remove'     => true,        

        'test-access'     => true,
        'test-add'        => true,
        'test-remove'     => true,
        'test-edit'       => true,

        'question-access' => true,
        'question-add'    => true,
        'question-edit'   => true,
        'question-remove' => true,

        'answer-access' => true,
        'answer-add'    => true,
        'answer-edit'   => true,
        'answer-remove' => true,
    ];

    public static function fetchPremissionsList(){
        $premissions = [];
        foreach (static::$data as $key => $item){
            $premissions[] = $key;
        }

        return $key;
    }

    public static function pack($stringData) {
        $premissions = [];
        $index       = 0;
        foreach (static::$data as $key => $item) {
            $premissions[$key] = $stringData[$index++] === '1' ? true : false;
        }

        return $premissions;
    }

    public static function roleExists($role){
        $db = new DataBase();
        return $db->select('ROLES',null,'TITLE = '.$role);
    }
}