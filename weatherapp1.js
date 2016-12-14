var request= require('request');
var url = 
'http://api.openweathermap.org/data/2.5/weather?appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial&q=London';

module.exports=function (callback) {
request({
    url: url,
    json: true
    }, function(error,response,body){
        if(error){
          
callback('Unable to fetch weather');
        }else {
            console.log('its' +body.main.temp + 'in' + body.name + '!');
        }
    });
}