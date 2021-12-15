const ProductsModel = require('../models/products')

async function get(req, res){
    const products = await ProductsModel.find()
    res.send(products)
}

async function post (req, res){
    const {
        name,
        brand,
        price,
    } = req.body


    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'sucess'
    })
}

async function put(req, res){
    const {id} = req.params

    //RETORNA O UPDATE
    const product = await ProductsModel.findOneAndUpdate({_id: id}, req.body, {new: true})

    res.send({
        message: 'sucess',
        product,
    })

    /*NAO RETORNA O UPDATE
     const product = await ProductsModel.findOne({_id: id})

    await product.updateOne(req.body)

    res.send({
        message: 'sucess',
        product,
    })
     */


}


module.exports = {
    get,
    post,
    put,
}