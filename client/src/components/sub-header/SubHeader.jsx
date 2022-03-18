import React from 'react'
import { Box} from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    subHeadingContainer:{
        margin : 'auto',
        backgroundColor: '#2EAF7D',
        padding: '1rem',
        width: '60%',
        'border-radius': '1rem'
    },
    subHeading:{
        margin: 'auto',
        color: '#FFFFFF'
    }
})

function SubHeader() {
    const classes = useStyles();
  return (
    <Box className = {classes.subHeadingContainer}>
    <p className = {classes.subHeading}>Hello There! In todays news: </p>
    </Box>
    )
}
export default SubHeader