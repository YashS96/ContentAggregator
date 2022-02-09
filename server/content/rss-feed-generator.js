import rssParser from 'rss-parser'

const parser = new rssParser();

export let ndtv = async () =>{
    try{
        let topStories = await parser.parseURL('http://feeds.feedburner.com/ndtvnews-top-stories?format=xml');    
        let international  = await parser.parseURL('http://feeds.feedburner.com/ndtvnews-world-news?format=xml');
        let national  = await parser.parseURL('http://feeds.feedburner.com/ndtvnews-india-news?format=xml');
          
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`NDTV successfully delivered!`)
    }
}

export let hindu = async () =>{
    try{
        let national = await parser.parseURL('https://www.thehindu.com/news/national/feeder/default.rss');    
        let international  = await parser.parseURL('https://www.thehindu.com/news/international/feeder/default.rss');
        let business  = await parser.parseURL('https://www.thehindu.com/business/feeder/default.rss');
        let sport = await parser.parseURL('https://www.thehindu.com/sport/feeder/default.rss');    
        let entertainment  = await parser.parseURL('https://www.thehindu.com/entertainment/feeder/default.rss');
        
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`The Hindu successfully delivered!`)
    }
}

export let bbc = async () =>{
    try{
        let topStories = await parser.parseURL('http://feeds.bbci.co.uk/news/rss.xml');    
        let international  = await parser.parseURL('http://feeds.bbci.co.uk/news/world/rss.xml');
        let business  = await parser.parseURL('http://feeds.bbci.co.uk/news/business/rss.xml');
        let politics  = await parser.parseURL('http://feeds.bbci.co.uk/news/politics/rss.xml');
        let tech  = await parser.parseURL('http://feeds.bbci.co.uk/news/technology/rss.xml');
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`BBC successfully delivered!`)
    }
}

export let unitedNations = async () =>{
    try{
        let topStories = await parser.parseURL('https://news.un.org/feed/subscribe/en/news/all/rss.xml');    
        let international  = await parser.parseURL('https://news.un.org/feed/subscribe/en/news/topic/health/feed/rss.xml');
        let business  = await parser.parseURL('https://news.un.org/feed/subscribe/en/news/topic/human-rights/feed/rss.xml');
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log(`UN successfully delivered!`)
    }
}
