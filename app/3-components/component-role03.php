<?php

namespace Components;

use Controllers\Component;
use Controllers\WLBlade;
use stdClass;

class Role3Component extends Component
{
    protected static function fetchActorData() {
        $actor = new \stdClass();
        $actor->imageUrl = './public/images/lik-03.png';

        return $actor;
    }

    protected static function render(){
        $actor = static::fetchActorData();

        return WLBlade::render('pages.home-components.actor',[
            'actor' => $actor
        ]);
    }
}