//import News from '../model/news.js'
import { ndtv, hindu, bbc } from '../content/rss-feed-generator.js'
import logger from '../logger/index.js';

 export let getNDTV = async (request, response) => {
    try{
        let dataNDTV = await ndtv()
        response.status(200).json(dataNDTV)
    }
    catch(err){
        logger.error(err)
        response.status(500).json(err)
    }
} 
 
export let getHindu = async (request, response) => {
    try{
        let dataHindu = await hindu()
        response.status(200).json(dataHindu)
    }
    catch(err){
        logger.error(err)
        response.status(500).json(err)
    }
} 
export let getBBC = async (request, response) => {
    try{
        let dataBBC = await bbc()
        response.status(200).json(dataBBC)
    }
    catch(err){
        logger.error(err)
        response.status(500).json(err)
    }
} 