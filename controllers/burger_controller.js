var express = require('express');
var db = require('../models');


var router = express.Router();

router.get('/', function (req, res) {
    db.Burgers.findAll({

    }).then(function (data) {

        var nonDevoured = [];
        var devoured = [];

        data.forEach(burger => {
            if (burger.devoured) {
                devoured.push(burger);
            } else {
                nonDevoured.push(burger);
            }
        });

        res.render('index', {
            nonDevoured: nonDevoured,
            devoured: devoured
        });
    });

});

router.post('/api/burger/add', function (req, res) {
    db.Burgers.create({
        burger_name: req.body.name
    }).then(function (data) {
        res.status(201).end();
    })
})

router.put('/api/burger/eat', function (req, res) {

    var id = req.body.id;

    db.Burgers.update({
        devoured: true
    }, {
        where: {
            id: id
        }
    }).then(function (data) {
        res.status(202).end();
    })
})

router.delete('/api/burger/remove', function (req, res) {

    var id = req.body.id;

    db.Burgers.destroy({
        where: {
            id: id
        }
    }).then(function () {
        res.status(204).end();
    })
})

module.exports = router;