import React from 'react'
import { Box, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    articleContainer:{
        margin : ' 2em 40%',
        width: '90%',
        'broder-radius': '.3rem',
        padding: '1rem'
    },
    content: {
        //display: 'flex',
        margin : 'auto',
        padding: '1rem',
        color: 'white',
        background: 'black'

    }
})

function Article(props) {
    let category = props.data.categories
    let content = props.data.content
    let link = props.data.link
    let title = props.data.title
    let publishDate = props.data.isoDate

    const classes = useStyles();
  return (
        <Card className={classes.articleContainer}>
            {title}
            <CardContent >
                <Grid>
                {/* <img src={} alt='image'/> */}
                </Grid>
                <Grid className={classes.content}>
                     {content}
                </Grid>
                </CardContent>
            {console.log({title})}
        </Card>
  )
}

export default Article