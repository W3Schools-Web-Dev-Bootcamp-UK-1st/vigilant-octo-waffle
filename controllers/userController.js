
const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
]

const login = (req, res) => {
    console.log(req.body);
    try {
        const { username, password } = req.body;

        // Check if request body is missing required data
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }

        const user = users.find((user) => user.username === username && user.password === password);

        if (user) {
            res.send('Login successful');
        } else {
            res.status(401).send('Login failed');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while logging in');
    }
}

const register = (req, res) => {
    console.log(req.body);
    try {
        const { username, email, password, name } = req.body;

        // Check if request body is missing required data
        if (!username || !email || !password || !name) {
            return res.status(400).send('Username, email, password and name are required');
        }

        // Check if user already exists
        const existingUser = users.find((user) => user.username === username || user.email === email);
        if (existingUser) {
            return res.status(409).send('User with this username or email already exists');
        }

        const user = {
            id: users.length + 1,
            username,
            email,
            password,
            name
        }

        users.push(user);
        res.send('User added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while registering');
    }
}

module.exports = {
    login,
    register,
    user: users
}
