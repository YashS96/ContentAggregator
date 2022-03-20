let url = 'http://localhost:8000' 

export const getTopStoriesNDTV = async () =>{
    try{
        
        let resp = await fetch(`${url}/ndtvfeed`) 
        let feed = await resp.json();
        // console.log(resp)
        // console.log(feed)
        return feed;
    }
    catch(e){
        console.log(e)
    }
}
export const getTopStoriesBBC = async () =>{
    try{
        
        let resp = await fetch(`${url}/bbcfeed`) 
        let feed = await resp.json();
        // console.log(resp)
        // console.log(feed)
        return feed;
    }
    catch(e){
        console.log(e)
    }
}

export const getTopStoriesHindu = async () =>{
    try{
        
        let resp = await fetch(`${url}/hindufeed`) 
        let feed = await resp.json();
        // console.log(resp)
        // console.log(feed)
        return feed;
    }
    catch(e){
        console.log(e)
    }
}

