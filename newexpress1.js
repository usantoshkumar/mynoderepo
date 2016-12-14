var express = require('express');
var bp = require('body-parser')

var app = express();
app.use (bp.json());

var mytask=[{
    description: 'go to market',
    completed:true
},
{description: 'talk to friend',
completed: true
}]

app.post('/postmydata',function (req,res) {
    var data=req.body;
    mytask.push(data);
});

app.get('/getmydata',function (req,res) {
    res.json(mytask);
});

app.listen(3000,function(){
    console.log('server is started');
})
