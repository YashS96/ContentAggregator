import React from 'react'
import { Box, Card, CardContent, Grid } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ndtvLogo from '../../images/feed/ndtv.png'
import hinduLogo from '../../images/feed/theHindu.png'
import bbcLogo from '../../images/feed/bbc.png'
import './article.css'


function Article(props) {
    let category = props.data.categories
    let content = props.data.content
    let link = props.data.link
    let title = props.data.title
    let publishDate = props.data.isoDate
    let contentSnippet= props.data.contentSnippet
    let imgSrc = '';
            
    if(link.toString().includes('ndtv')) {
        imgSrc = ndtvLogo
    }
    else if(link.toString().includes('bbc')) {
        imgSrc = bbcLogo
    }
    else if(link.toString().includes('thehindu')){
        imgSrc = hinduLogo
    }
    else
        imgSrc =''
    if(contentSnippet != null && contentSnippet != '')
        return (
            <Card className="articleContainer">
                <Grid className="articleHeader" >
                    {title}
                </Grid>
                <CardContent className="articleContent">
                    <Grid className="imageContainer">
                    {<a href={link}><img className="image" src={imgSrc} alt = "image"/> </a> }
                    </Grid>
                    <Grid className="content">
                        {content}
                    </Grid>
                </CardContent>
                <div className="cardFooter">
                    <a href={link}><span><LanguageIcon/></span></a>
                    <span><StarOutlineIcon/></span>
                    <span>{category ? category : 'Top Story' }</span>
                    <span>{publishDate.substring(0,10)}</span>
                </div>
            </Card>
        )
    else  return ('')
}

export default Article