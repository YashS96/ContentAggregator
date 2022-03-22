//import './App.css';
import React from 'react';
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Header from './components/header/Header' 
import SubHeader from './components/sub-header/SubHeader'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'

const useStyles = makeStyles({
  app:{
    backgroundColor:'#ffffff'
  },
  subheader:{
      marginTop: 50
  }  
})


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
     <Box >
       <Header/>
       <Box className={classes.subheader}>
       <SubHeader/>
       <Articles/>
       </Box>
       <Footer/>
     </Box>
    </div>
  );
}

export default App;
