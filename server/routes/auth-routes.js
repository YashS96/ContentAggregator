import express from 'express'
import { login, logout } from '../controllers/user-controller.js'

const authRouter = new express.Router();

// // router.post('/register', register)

// // Auth login
// router.post('/login', login)

// // Auth with google
// router.get('/google', )
// // Auth with facebook

// // Auth with Github

// Auth Logout
// router.get('/logout', logout)

export default authRouter