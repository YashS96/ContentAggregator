import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';


const useStyles = makeStyles({

    footer:{
        borderTop: '1px solid grey',
        marginTop: '1rem',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        color: 'black',
        display : 'flex',
        flexDirection: 'column',
        fontWeight:'bold'
    },
    a:{
        'a:link':{
            textDecoration: 'none'
        },
        'a:visited':{

        }
    },
    span:{
        padding: '2em',
        color: 'black'
    }

}) 



const Footer = () => {
       
    const classes = useStyles();
    const email = 'srivastavyash7@gmail.com';
    const phone = '+91-8817330740';

    return(
        <Box className = {classes.footer}>
                Developer contact : 
                <a href='mailto:srivastavyash7@gmail.com'><EmailIcon/> <span>{email}</span></a>
                <a href="https://www.linkedin.com/in/yash-shrivastava-1b7541149"><LinkedInIcon/><span>Profile</span></a>
                <a><ContactPhoneIcon/><span>{phone}</span></a>
        </Box>
    )
}

export default Footer;