//import './App.css';
import React from 'react';
import { Box } from '@mui/material'


import SubHeader from './components/sub-header/SubHeader'
import Articles from './components/articles/Articles'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
    <div className="app">
     <Box>
       <Box className="subheader">
       <SubHeader/>
       <Articles className="articles"/>
       </Box>
       <Footer/>
     </Box>
    </div>
  );
}

export default App;
