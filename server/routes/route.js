import express from 'express'
import  getNews from '../controllers/news-controller.js'
import { register, login } from '../controllers/user-controller.js'

const router = new express.Router();

router.post('/register', register)

router.post('/login', login)

router.get('/feed', getNews)

export default router;