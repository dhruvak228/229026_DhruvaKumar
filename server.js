const express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');

//app.use(express.static(path.join(__dirname+'public')));

app.get('/',(req,resp)=>{
    console.log("first form");
    resp.sendFile('public/index.html',{root:__dirname});
})

app.get('/schedule',(req,resp)=>{
    console.log("second form")
    resp.sendFile('public/schedule.html',{root:__dirname});
})

var server=app.listen(3000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("server listening on port 3000",host,port);
})