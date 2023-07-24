const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


const router = require('./routers/userRoutes');
const users = require('./controllers/userController');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/profile', (req, res) => {
    res.send(`This is the /profile endpoint`);
    }  
);

let products = [
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

app.delete('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === Number(id));
    if (product) { 
        products.splice(products.indexOf(product), 1);
        res.send(`${product.name} was deleted`);
    } else { 
        res.send(`Product does not exist`);
    }
});


app.get('/cart', (req, res) => {
    res.send(`This is the /cart endpoint`);
    }
);

app.get('/users', (req, res) => {
    res.send(users);
    }
);

// with login and register user userRouter
app.use('/user', router);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);