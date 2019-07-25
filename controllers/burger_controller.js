var express = require('express');
var Burgers = require('../models/burger');


var router = express.Router();

router.get('/', function (req, res) {
    Burgers.findAll({
        where: {
            devoured: false
        }
    }).then(function (data1) {

        Burgers.findAll({
            where: {
                devoured: true
            }
        }).then(function (data2) {
            res.render('index', {
                burgers: data1,
                devoured: data2
            });
        });
    })
});

router.post('/api/burger/add', function(req, res){
    Burgers.create({burger_name:req.body.name}).then(function (data){
        res.status(201).end();
    })
})

router.post('/api/burger/eat', function(req, res){

    var id = req.body.id;
    
    Burgers.update({
        devoured: true
    },
    {
        where: {
            id:id
        }
    }).then(function (data){
        res.status(202).end();
    })
})

router.post('/api/burger/remove', function(req, res){

    var id = req.body.id;
    
    Burgers.destroy({
        where: {
            id:id
        }
    }).then(function (){
        res.status(204).end();
    })
})

module.exports = router;