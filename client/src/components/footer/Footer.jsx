import React from 'react'
import { Box, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const Footer = () => {
       
    const email = 'srivastavyash7@gmail.com';
    const phone = '+91-8817330740';

    return(
        <Box className = "footer">
                Developer contact : 
                <a href='mailto:srivastavyash7@gmail.com'><EmailIcon/> <span>{email}</span></a>
                <a href="https://www.linkedin.com/in/yash-shrivastava-1b7541149"><LinkedInIcon/><span>Profile</span></a>
                <a><ContactPhoneIcon/><span>{phone}</span></a>
        </Box>
    )
}

export default Footer;