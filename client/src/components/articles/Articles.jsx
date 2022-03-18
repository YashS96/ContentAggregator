import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Article from './Article'
import { getTopStories } from '../../service/rss-api.js'

const useStyles = makeStyles({
    wrapper:{
        width: '60%'
    },
    article: {

    }
})


function Articles() {

    const [newsFeed, setNewsFeed] =  useState([]);

    useEffect(()=>{
        getNews();
    },[])

    const getNews = async () =>{
        try{
            let news = await getTopStories();
            setNewsFeed(news.items)
          //  console.log(news.items) 
        }
        catch(e){
            console.log(e)
        }
    }

    const classes = useStyles();

  return (
      <Box className={classes.wrapper}>
         {newsFeed.map((article, index)=>(
            <Article calssName = {classes.article} key = {index} data={article}/>
        ))}
     </Box>
  )
}

export default Articles