import React from 'react'
import { Box, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {  Menu } from '@mui/icons-material'
import RssFeedIcon from '@mui/icons-material/RssFeed';

const useStyles = makeStyles({
  header:{
    backgroundColor:'#ffffff',
    fontSize: 'large'  
  },
  menu: {
    color: 'black'
    
  },
  rssLogo:{
    margin:'auto',
    color: 'black'
    
  }
})

function Header() {
  const classes = useStyles();
  return (
    <Box >
        <AppBar>
            <Toolbar className={classes.header}>
                <Menu className={classes.menu}/>
                <RssFeedIcon className={classes.rssLogo}/>
            </Toolbar>  
        </AppBar>
    </Box>
  )
}

export default Header
