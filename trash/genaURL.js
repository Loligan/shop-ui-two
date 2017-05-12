
var data = {
    'manufacture':['iPhone','Samsung','Xiaomi'],
    'price':{'min':100,'max':500},
    'ram':{'min':1024,'max':2048},
    'sort':{'by':'id','type':'asc'}
};

// GENERATE LINK PARAM
var furl = "http://example.com/?"+jQuery.param(data);
console.log(furl);

//ENCODE LINK PARAM
var obj = $.url(furl).param();
console.log(obj);