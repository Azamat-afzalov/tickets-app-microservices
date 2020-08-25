import express from 'express'
const router = express.Router()

router.get('/api/users/currentuser', (req, res) => {
    console.log('currentUser route')
    res.send('Hi there')
})

export {router as currentUserRouter};