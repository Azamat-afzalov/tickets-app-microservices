import express from 'express'
const router = express.Router()

router.post('/api/users/signup', (req, res) => {
    console.log('currentUser route')
    res.send('Hi there')
})

export {router as signUpRouter};