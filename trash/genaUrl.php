<?php

//GENERATE URL
$data = array(
    'manufacture' => array('iPhone','Samsung','Xiaomi'),
    'price' => array('min'=>100,'max'=> 500),
    'ram' => array('min'=>1024, 'max=>'=>2046),
    'sort' => array('by'=>'id','type'=>'acs')
);
$params = http_build_query($data,'flags_');
$url = "http://example.com/?".$params;

//PARSE URL
$parts = parse_url("http://example.com?manufacture%5B0%5D=iPhone&manufacture%5B1%5D=Samsung&manufacture%5B2%5D=Xiaomi&price%5Bmin%5D=100&price%5Bmax%5D=500&ram%5Bmin%5D=1024&ram%5Bmax%5D=2048&sort%5Bby%5D=id&sort%5Btype%5D=asc");
parse_str($parts['query'],$parts);
var_dump($parts);

