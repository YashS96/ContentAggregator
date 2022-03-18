//import News from '../model/news.js'
import { ndtv/*, hindu, bbc, unitedNations*/ } from '../content/rss-feed-generator.js'

 let getNews = async (request, response) => {
    try{
        let data = await ndtv()
        response.status(200).json(data)
    }
    catch(err){
        console.log(err)
        response.status(500).json(err)
    }
} 

export default getNews;