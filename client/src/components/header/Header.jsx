import React from 'react'
import { Box, AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import {  Menu } from '@mui/icons-material'

const useStyles = makeStyles({
  header:{
    backgroundColor:'#3FD0C9'
  }
})

function Header() {
  const classes = useStyles();
  return (
    <Box >
        <AppBar>
            <Toolbar className={classes.header}>
                <Menu/>
            </Toolbar>  
        </AppBar>
    </Box>
  )
}

export default Header
