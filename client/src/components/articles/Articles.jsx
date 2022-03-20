import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Article from './Article'
import { getTopStoriesBBC, getTopStoriesNDTV, getTopStoriesHindu } from '../../service/rss-api.js'

const useStyles = makeStyles({
    wrapper:{
        width: '50%',
        margin : 'auto'
    },
    article: {
 
    },
})


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
            //console.log([...src1.items, ...src2.items,...src3.items]) 
        }
        catch(e){
            console.log(e)
        }
    }

    const classes = useStyles();

    return (
      <Box className={classes.wrapper}>
         { newsFeed.map((article, index) => {

            return <Article calssName = {classes.article} key = {index} data = {article} imgTrace={article.link.toString()} />
         })}
     </Box>
    )
}

export default Articles