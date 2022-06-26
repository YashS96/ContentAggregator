import express from 'express'
import { getBBC, getHindu, getNDTV } from '../controllers/news-controller.js'

const router = new express.Router();

router.get('/ndtvfeed', getNDTV)

router.get('/bbcfeed', getBBC)

router.get('/hindufeed', getHindu)

export default router;