var express = require('express');
var app = express();

// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("x-Powered-By",'3.2.1');
    res.header("content-Type","application/json;charset=utf-8");
    next();
});

app.get('/get_loginbtnlist', function(req, res){
    var loginBtnList = ['推荐','居家生活','服饰鞋包','美食酒水','母婴亲子','全球特色','数码家电','运动旅行'];
    res.send( loginBtnList );
});

app.listen(5454, function(){
    console.log('5454,商城app中间件，已经运行!');
});