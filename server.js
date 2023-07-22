const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/profile', (req, res) => {
    res.send(`This is the /profile endpoint`);
    }  
);

const products = [
    { id: 1, name: 'Milk' },
    { id: 2, name: 'Eggs' },
    { id: 3, name: 'Cheese' },
    { id: 4, name: 'Pork' },
    { id: 5, name: 'Shrimp' },
    { id: 6, name: 'Chicken' }
];

app.get('/products', (req, res) => {  
    // if has query run search else return this is the products endpoint
    if (req.query.search) {
        // if serach includes product from produts return product exists else return product does not exist
        const search = req.query.search;
        const product = products.find((product) => product.name === search);
        if (product) {
            res.send(`${product.name} exists`);
        } else {
            res.send(`${search} does not exist`);
        }
    }
    else {
        res.send(`This is the /products endpoint`);
    }
});

app.get('/cart', (req, res) => {
    res.send(`This is the /cart endpoint`);
    }
);

app.get('/register', (req, res) => {
    res.send(`This is the /register endpoint`);
    }
);

app.get('/login', (req, res) => {
    res.send(`This is the /login endpoint`);
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);