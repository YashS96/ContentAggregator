let url = 'http://localhost:8000' 

export const getTopStories = async () =>{
    try{
        
        let resp = await fetch(`${url}/feed`) 
        let feed = await resp.json();
        // console.log(resp)
        // console.log(feed)
        return feed;
    }
    catch(e){
        console.log(e)
    }
}
