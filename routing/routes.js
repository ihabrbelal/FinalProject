var path = require('path');
var amazon = require('amazon-product-api');
var connection = require('../server.js');
var express = require('express');
var app = express();
// amazon npm
var client = amazon.createClient({
    awsId: "909AKIAJQFSG22R74FY6KWQ909",
    awsSecret: "9098q25Etjkb4+20usC9tXnapGWR3KBWX9UFyQY6P/7909",
    // awsTag: "logylink-20"
});

module.exports = function(app) {
    // home page route
    app.get("/", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/index.html"));

    });


    app.get("/admin", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/admin.html"));
    });


    app.get("/about", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/checkout", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/checkout.html"));
    });


    app.get("/contact", function(req, res) {
        // res.redirect("/index.html");
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });


    app.post("/admin/items", function(req, res) {
        const { upc, asin, quantity, category, product_name, product_desc, image, price } = req.body;

        console.log(upc, asin, category, product_name, product_desc, image, price);

        var newItem = {
            upc: upc,
            asin: asin,
            quantity: quantity,
            category: category,
            product_name: product_name,
            product_desc: product_desc,
            image: image,
            price: price
        }

        connection.query("INSERT INTO products SET ?", newItem, function(err, res) {
            // res.status(200).json({ success: true });
        });
    });


    app.get("/api/ourproducts", function(req, res) {
        connection.query("SELECT * FROM products;", function(err, data) {

            if (err) {
                throw err;
            }

            var products = data;
            var array = [];
            var asinArray = [];
            var theAsin;
            var theUpc;
            var arrayTest = [];


            //pull UPC from data
            for (i = 0; i < products.length; i++) {
                product = products[i];
                theUpc = product.upc;
                theAsin = product.asin;
                console.log('this is ASIN: ', theAsin);
                array.push(theUpc);
                asinArray.push(theAsin);
            }

            var queryItems;
            // console.log(queryItems);
            //  making call to amazon

            res.json(products);
        });
    });


    app.get("/api/ourproducts/:category", function(req, res) {
        connection.query('SELECT * FROM `products` WHERE `category` = ?', [req.params.category], function(err, data) {

            if (err) {
                throw err;
            }

            var products = data;
            var array = [];
            var asinArray = [];
            var theAsin;
            var theUpc;
            var arrayTest = [];


            //pull UPC from data
            for (i = 0; i < products.length; i++) {
                product = products[i];
                theUpc = product.upc;
                theAsin = product.asin;
                console.log('this is ASIN: ', theAsin);
                array.push(theUpc);
                asinArray.push(theAsin);
            }

            var queryItems;
            // console.log(queryItems);
            //  making call to amazon

            res.json(products);
        });
    });
        app.get("/api/ourproducts/search/:searchterm", function(req, res) {
         var qry = 'SELECT * FROM `products` WHERE `product_name` LIKE ? OR `product_desc` LIKE ? OR `upc` LIKE ? OR `category` LIKE ?';
        var args = ['%'+req.params.searchterm+'%', '%'+req.params.searchterm+'%', '%'+req.params.searchterm+'%', '%'+req.params.searchterm+'%'];
       // SELECT * FROM products
//WHERE category LIKE '%canon%' OR upc LIKE '%canon%' OR product_desc LIKE '%canon%' OR product_name LIKE '%canon%';
   connection.query(qry, args, function(err, data) {

    //get products and return json
      if (err) {
                throw err;
            }

            var products = data;
            var array = [];
            var asinArray = [];
            var theAsin;
            var theUpc;
            var arrayTest = [];


            //pull UPC from data
            for (i = 0; i < products.length; i++) {
                product = products[i];
                theUpc = product.upc;
                theAsin = product.asin;
                console.log('this is ASIN: ', theAsin);
                array.push(theUpc);
                asinArray.push(theAsin);
            }

            var queryItems;
            // console.log(queryItems);
            //  making call to amazon

            res.json(products);
        });
});
}
