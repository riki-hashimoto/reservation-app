const express = require('express')
const router = express.Router()
const Product = require('../model/product')

router.get('', function(req, res){
    Product.find().then((data) => {
        res.json(data)
    })
})

router.get('/:productId', function(req, res){
    const productId = req.params.productId
    Product.findById(productId).then((data) => {
        return res.json(data)
    })
    .catch(() => {
        return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found!'}] })
    })
})

module.exports = router