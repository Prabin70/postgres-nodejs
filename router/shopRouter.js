const express = require('express');
const router = express.Router();
const db = require('../database/database')

const Shop = require('../model/Shop')
router.get('/', (req, res, next) => {
    Shop.findAll()
        .then(shops => {
            console.log(shops);
            res.sendStatus(200);

        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });

});


module.exports = router;