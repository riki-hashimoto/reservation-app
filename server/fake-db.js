const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products = [
            {
                name: "test",
                price: 700,
                description: "test",
                heading1: "test",
                heading2: "test",
                heading3: "test",
                headingtext1: "test",
                headingtext2: "test",
                headingtext3: "test",
            }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb(){
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product)=>{
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb