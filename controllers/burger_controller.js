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

router.post('/api/burger', function(req, res){
    Burgers.create(req.body).then(function (data){
        res.status(201).end
    })
})


module.exports = router;