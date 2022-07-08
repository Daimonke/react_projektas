import express from 'express';
import bcrypt from 'bcrypt';
import axios from 'axios';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            err: 'Email and password are required'
        })
    };

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = {
        email,
        password: hashedPwd
    };

    const allUsers = await axios.get('http://localhost:3100/users');
    if (allUsers.data.find(user => user.email === email)) {
        return res.status(400).json({
            err: 'Email already exists'
        })
    }

    await axios.post('http://localhost:3100/users', user);

    res.json({ changes: 1 });
});

export default router;