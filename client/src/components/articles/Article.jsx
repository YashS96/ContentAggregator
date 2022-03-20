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
        margin : '2em',
        broderRadius: '.3rem',
        padding: '1rem',
        fontWeight : 'bold',
        boxShadow : '.3em .3em .5em rgba(0,0,0, .4), -.3em -.3em .5em rgba(0,0,0, .4), ',
        '&:hover':{
            boxShadow : '.3em .3em .5em rgba(0,0,0, .4)'
        },
        fontFamily: 'Lato, sans-serif'
    },
    articleHeader: {
        fonstSize : 'large'
    },
    image:{
        width: '30%',
        height: '50%',
        padding: '2em'
    },
    content: {
        //display: 'flex',
        margin : 'auto',
        padding: '1rem',
        color: '#00458B'

    },
    cardFooter:{
        padding:'1em',
        margin:'1em',
        color: 'black'
    }
})

function Article(props) {
    let category = props.data.categories
    let content = props.data.content
    let link = props.data.link
    let title = props.data.title
    let publishDate = props.data.isoDate
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
  return (
        <Card className={classes.articleContainer}>
            <Grid className={classes.articleHeader} >
                {title}
            </Grid>
            <CardContent >
                <Grid className={classes.image}>
                {<a href={link}><img src={imgSrc} alt='image'/></a> }
                </Grid>
                <Grid className={classes.content}>
                     {content}
                </Grid>
                <a className={classes.cardFooter} href={link}><span><LanguageIcon/></span></a>
                <span className={classes.cardFooter}><StarOutlineIcon/></span>
                <span className={classes.cardFooter}>{category ? category : 'Top Story' }</span>
                <span className={classes.cardFooter}>{publishDate.substring(0,10)}</span>
                </CardContent>
            {/* {console.log({title})} */}
        </Card>
  )
}

export default Article