
var Burgers = require('./models/burger');

Burgers.findAll().then(function (data){
    console.log(data);
})

