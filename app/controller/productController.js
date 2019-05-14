const path = require('path');
const fs = require('fs');
let db = require('../models');
let Product = db.Product;

const index = (req, res) => {
    Product.findAll().then(result => {
        res.render('product/products', {products: result, success: req.flash('success'), 'error': req.flash('error')});
    }).catch(err => {
        res.send(err);
    });
};

const indexApi = (req, res) => {
    Product.findAll().then(products => {
        res.send(products);
    }).catch(err => {
        res.send(err);
    });
};

const newProduct = (req, res) => {
    res.render('product/new_product');
};
const saveNewProduct = (req, res) => {
    const tempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const fileName = (new Date().getTime() + ext);
    const targetPath = path.join(__dirname, '../../public/uploads/' + fileName);
    fs.rename(tempPath, targetPath, err => {
        if (err) {
            fs.unlink(tempPath, err => {
                if (err) {
                    res.send(err);
                }
            });
            res.send(err);
            return;
        }
        let product = {
            product_category: req.body.product_category,
            product_image: fileName
        };
        Product.create(product).then(result => {
            req.flash('success', 'New Product Created');
            res.redirect('/admin/products');
        }).catch(err => {
            res.send(err);
        });
    });
};
const editProduct = (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.render('product/edit_product', {product: result});
    }).catch(err => {
        res.send(err);
    });
};
const updateProduct = (req, res) => {
    const tempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const fileName = (new Date().getTime() + ext);
    const targetPath = path.join(__dirname, '../../public/uploads/' + fileName);
    fs.rename(tempPath, targetPath, err => {
        if (err) {
            fs.unlink(tempPath, err => {
                if (err) {
                    res.send(err);
                }
            });
            res.send(err);
            return;
        }
        let product = {
            product_category: req.body.product_category,
            product_image: fileName
        };
        Product.update(product, {
            where: {
                id: req.params.id
            }
        }).then(result => {
            req.flash('success', 'Product Updated');
            res.redirect('/admin/products');
        }).catch(err => {
            res.send(err);
        });
    });
    let product = {
        product_category: req.body.product_category,
    };
};
const deleteProduct = (req, res) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    }
    ).then(result => {
        req.flash('success', 'Product Deleted');
        res.redirect('/admin/products');
    }).catch(err => {
        res.send(err);
    });
};

module.exports = {
    index,
    indexApi,
    newProduct,
    saveNewProduct,
    editProduct,
    updateProduct,
    deleteProduct
};