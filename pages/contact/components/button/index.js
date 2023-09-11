import { Box } from '@mui/material'
import React from 'react'
import Styles from '../../css/contact.module.css'
import Container from '@mui/material/Container';
import Link from 'next/link';

function index() {
  return (
    <>
    <Container sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mt:"50px"}} maxWidth="false">
            <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
            <Box sx={{mr:10}}></Box>
            <Link style={{textDecoration:"none"}} href="/contact" >
            <Box className={Styles.btcontact}>Contact Us</Box>
            </Link>
        </Box>
        </Container>
        
        <Container sx={{display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', mt:"30px"}} maxWidth="false">
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
        <Box sx={{mr:1}}></Box>
        <Link style={{textDecoration:"none"}} href="/contact" >
        <Box className={Styles.btcontactmobile}>Contact Us</Box>
        </Link>
    </Box>
    </Container>
</>
  )
}

export default index