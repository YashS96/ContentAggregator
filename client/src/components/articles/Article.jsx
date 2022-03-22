import React from 'react'
import { Box, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import LanguageIcon from '@mui/icons-material/Language';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ndtvLogo from '../../images/ndtv.png'
import hinduLogo from '../../images/theHindu.png'
import bbcLogo from '../../images/bbc.png'


const useStyles = makeStyles({
    articleContainer:{
        margin : '2rem',
        broderRadius: '.3rem',
        padding: '1rem',
        fontWeight : 'bold',
        // boxShadow : '.3em .3em .5em rgba(0,0,0, .4), -.3em -.3em .5em rgba(0,0,0, .4), ',
        '&:hover':{
            boxShadow : '.3em .3em .5em rgba(0,0,0, .4)'
        },
        fontFamily: 'Lato, sans-serif'
    },
    articleHeader: {
        fonstSize : 'large'
    },
    articleContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'strech'
    },
    imageContainer: {
        padding: '1em'

    },
    image:{
        maxWidth : '200px',
        maxHeight: '200px',
        borderRadius: '10px',
        border: '1px solid black',
        // boxShadow : '.3em .3em .5em rgba(0,0,0, .4), -.3em -.3em .5em rgba(0,0,0, .4), ',
        '&:hover':{
            boxShadow : '.3em .3em .5em rgba(0,0,0, .4)'
        }
    },
    content: {
        margin : 'auto',
        padding: '1rem',
        color: '#00458B'

    },
    cardFooter:{
        padding:'1rem',
        margin:'1rem',
        color: 'black',
        paddingBottom: '1rem'
    }
})

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
    const classes = useStyles();
    if(contentSnippet != null && contentSnippet != '')
        return (
            <Card className={classes.articleContainer}>
                <Grid className={classes.articleHeader} >
                    {title}
                </Grid>
                <CardContent className={classes.articleContent}>
                    <Grid className={classes.imageContainer}>
                    {<a href={link}><img className={classes.image} src={imgSrc} alt = "image"/> </a> }
                    </Grid>
                    <Grid className={classes.content}>
                        {content}
                    </Grid>
                </CardContent>
                    <a className={classes.cardFooter} href={link}><span><LanguageIcon/></span></a>
                    <span className={classes.cardFooter}><StarOutlineIcon/></span>
                    <span className={classes.cardFooter}>{category ? category : 'Top Story' }</span>
                    <span className={classes.cardFooter}>{publishDate.substring(0,10)}</span>
            </Card>
        )
    else  return ('')
}

export default Article