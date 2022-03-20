import express from 'express'
import { getBBC, getHindu, getNDTV } from '../controllers/news-controller.js'
// import { register, login } from '../controllers/user-controller.js'

const router = new express.Router();

// router.post('/register', register)

// router.post('/login', login)

router.get('/ndtvfeed', getNDTV)

router.get('/bbcfeed', getBBC)

router.get('/hindufeed', getHindu)

export default router;