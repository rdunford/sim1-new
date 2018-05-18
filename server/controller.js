module.exports = {
    getProducts: function (req, res, next) {
        req.app.get('db').get_products().then(response => {
            console.log('getProducts hit, sending response.');
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log('Error retrieving products: ', err);
        });
    },

    getProductById: function (req, res, next) {
        let productId = req.params.id

        req.app.get('db').get_a_product([productId]).then(response => {
            console.log('getProductById hit, sending response.')
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send(err);
            console.log('Error retrieving single product.', err);
        })
    },

    addProduct: function (req, res, next) {
        let { productname, price, img } = req.body;

        req.app.get('db').create_product([productname, price, img]).then(response => {
            console.log('addProduct hit, sending response.');
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log('Error creating new product: ', err);
        });
    },

    editProduct: function (req, res, next) {
        let productId = req.params.id;
        let { productname, price, img } = req.body;

        req.app.get('db').edit_product([productname, price, img, productId]).then(response => {
            console.log('Product updated successfully.');
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log('Error updating product: ', err);
        });
    },

    deleteProduct: function (req, res, next) {
        let productId = req.params.id;

        req.app.get('db').delete_product([productId]).then(response => {
            console.log('deleteProduct hit, sending response.');
            res.status(200).send(response);
        }).catch(err => {
            res.status(500).send(err);
            console.log('Error deleting product from database: ', err);
        });
    }

}