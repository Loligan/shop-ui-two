<?php

$str = "select u from MeldonCatalogBundle:ParameterItemEntity u where u.isNumber=1 and u.numberValue>=1024 order by u.id desc ";

/**
    %20 is space
    %5B is '['
    and %5D is ']'
 */
$url = "https://catalog.onliner.by/mobile?mfr%5B0%5D=xiaomi&mfr%5B1%5D=samsung&mfr%5B2%5D=huawei&price%5Bfrom%5D=100.00&price%5Bto%5D=500.00&smart%5B0%5D=android&smart%5Boperation%5D=union";
createQuery($url);
function createQuery($url){
    $query = "";

    $parts = parse_url($url);
    parse_str($parts['query'],$parts);
    foreach ($parts as $key => $arrValue){

    }

    $startQ = "select u from MeldonCatalogBundle:ParameterItemEntity u where ";
    $NumbQ = "where u.isNumber=1";
    $noNumbQ ="where u.isNumber=0";
    $param = "u.numberValue>=1024";
    $param = 'u.numberValue>=1024';
    $oredQ = "order by u.id desc";


    return $query;
}