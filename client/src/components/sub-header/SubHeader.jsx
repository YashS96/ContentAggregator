import React from 'react'
import { Box} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    subHeadingContainer:{
        margin : 'auto',
        backgroundColor: '#ffffff',
        padding: '1rem',
        width: '70%',
        'border-radius': '1rem',
        boxShadow: '.2em .2em .5em rgba(0,0,0,.5)'
    },
    subHeading:{
        margin: 'auto',
        color: '#black',
        fontWeight: 'bold',
        fontFamily: 'Lato, sans-serif'
    }
})

function SubHeader() {
    const classes = useStyles();
  return (
    <Box className = {classes.subHeadingContainer}>
    <h3 className = {classes.subHeading}>Hello There! In today's news: </h3>
    </Box>
    )
}
export default SubHeader