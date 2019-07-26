var express = require('express');
var db = require('../models');


var router = express.Router();

router.get('/', function (req, res) {
    db.Burgers.findAll({
        where: {
            devoured: false
        }
    }).then(function (data1) {

        db.Burgers.findAll({
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
    db.Burgers.create({burger_name:req.body.name}).then(function (data){
        res.status(201).end();
    })
})

router.post('/api/burger/eat', function(req, res){

    var id = req.body.id;
    
    db.Burgers.update({
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
    
    db.Burgers.destroy({
        where: {
            id:id
        }
    }).then(function (){
        res.status(204).end();
    })
})

module.exports = router;