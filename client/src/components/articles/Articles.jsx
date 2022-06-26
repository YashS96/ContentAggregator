import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'

import Article from './Article'
import './articles.css'
import { getTopStoriesBBC, getTopStoriesNDTV, getTopStoriesHindu } from '../../service/rss-api.js'


function Articles() {

    const [newsFeed, setNewsFeed] =  useState([])

    useEffect(()=>{
        getNews();
    },[])

    const getNews = async () =>{
        try{
            let src1 = await getTopStoriesNDTV()
            let src2 = await getTopStoriesBBC()
            let src3 = await getTopStoriesHindu()
            setNewsFeed([...src1.items, ...src2.items,...src3.items])
            let array = [...src1.items, ...src2.items,...src3.items]
            
            array.sort(() => Math.random() - 0.5)
            // let n = array.length;
            // let i=0;
            // while( i < n){
            //     i++;
            //     let pos = Math.floor(Math.random()*100)
            //     if(pos < n){
            //      array[i] = array[pos]
            //      console.log(array[pos])
            //     }
            // }
            console.log(array) 
        }
        catch(e){
            console.log(e)
        }
    }

    return (
      <Box className="wrapper">
         { newsFeed.map((article, index) => {

            return <Article calssName = "article" key = {index} data = {article} imgTrace={article.link.toString()} />
         })}
     </Box>   
    )
}

export default Articles