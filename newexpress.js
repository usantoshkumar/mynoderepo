var express = require('express');
var bp = require('body-parser')

var app = express();
app.use (bp.json());

var mytask=[];
    // {description: 'go to market',completed:true},
    // {description: 'talk to friend',completed: true},
    // {description: 'go bak to market',completed:true},
    // {description: 'give to friend',completed: true}
    // 
var mytaskid=1;
app.post('/postmydata',function (req,res) {
    var data=req.body;
    data.id=mytaskid++;
    mytask.push(data);
    res.json(data);
});

app.get('/getmydata',function (req,res) {
    res.json(mytask);
});

app.listen(3000,function(){
    console.log('server is started');
})
