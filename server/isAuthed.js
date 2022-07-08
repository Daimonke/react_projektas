import jwt from 'jsonwebtoken';

export default function isAuthed(req, res, next) {
    if (req.headers['authorization']) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, 'secret', (err, result) => {
            if (err) return res.status(400).send({ err: 'Invalid token' })
            req.token = result
            next()
        })
    } else {
        console.log('err verify')
        res.status(404).send({ err: 'Token not found' })
    }
}