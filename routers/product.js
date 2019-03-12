const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Get/product"
    });
});

router.post('/', (req, res, next) => {
  
    const product = new Product({
        _id:new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
    })
    product.save();
    
    res.status(200).json({
        message: 'Handling POST requests to /products',
        createdProduct: products
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'the special id',
            id: id
        });
    }
    else {
        res.status(200).json({
            message: 'You passed an id'
        });
    }
});

module.exports = router