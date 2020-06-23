<?php

use Components\Role1Component;
use Components\Role2Component;
use Components\Role3Component;
use Components\Role4Component;
use Controllers\WLRouter;

WLRouter::route('/home/actor1',function(){
    echo Role1Component ::buildPage();
});
WLRouter::route('/home/actor2',function(){
    echo Role2Component::buildPage();
});
WLRouter::route('/home/actor3',function(){
    echo Role3Component::buildPage();
});
WLRouter::route('/home/actor4',function(){
    echo Role4Component::buildPage();
});