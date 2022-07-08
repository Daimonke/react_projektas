import express from 'express';
import bcrypt from 'bcrypt';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            err: 'Email and password are required'
        })
    }

    const allUsers = await axios.get('http://localhost:3100/users');
    const user = allUsers.data.find(user => user.email === email);
    if (!user) {
        return res.status(400).json({
            err: 'Email does not exist'
        })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
            err: 'Password is incorrect'
        })
    }
    const token = jwt.sign({ id: user.id }, 'secret');
    res.json({ token });
});

export default router;