const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the general-platform store. For all your non-specific nords.');
});

app.get('/basket', (req, res) => {
    res.send({
        "cart": {
            "id": "81ce17e4-eea0-4d40-b07f-50e93b499d2a",
            "weight": 0,
            "item_count": 1,
            "requires_shipping": true,

            "line_items": [

                {
                    "id": 1765,
                    "quantity": 1,
                    "title": "Heavy Rock",
                    "product_title": "Heavy Rock",
                    "variant_title": "11oz - Black",
                    "weight": 0,
                    "taxable": true,
                    "image": "https://storage.googleapis.com/flocker-creator-library-staging/4b55d9db-e927-4e60-8f73-36e78d97ceb4/products/1025/10916_default.png?1558980873592423",
                    "price": 1300,
                    "requires_shipping": true
                }
            ]
        },

        "customer": {
            "id": 1033,
            "first_name": "Test",
            "last_name": "Addr",
            "email": "jeremy.wiebe@boldcommerce.com",

            "addresses": [

                {
                    "first_name": "Jeremy",
                    "last_name": "Wiebe",
                    "company": "Bold",
                    "address1": "50 Fultz Blvd.",
                    "address2": null,
                    "city": "Winnipeg",
                    "province": "Manitoba",
                    "country": "Canada",
                    "zip": "R3R3R3",
                    "country_code": "CA",
                    "province_code": "MB"
                },

                {
                    "first_name": "Test",
                    "last_name": "Addr",
                    "company": "Flocker",
                    "address1": "3305 Abbey Lane",
                    "address2": "Lot #160",
                    "city": "Wixom",
                    "province": "Michigan",
                    "country": "United States",
                    "zip": "48393",
                    "country_code": "US",
                    "province_code": "MI"
                }
            ]
        },
        "return_url": "https://jeremy-general.bold.ninja/cart",
        "shop_link_override": "jeremy-general.bold.ninja",
        "contact_email_override": "jeremy.wiebe@boldcommerce.com",
        "shop_name_override": "The General Shop",
        "header_link_override": "https://jeremy-general.bold.ninja",
        "login_url": "https://jeremy-general.bold.ninja/logout"
    });
});

module.exports = app;