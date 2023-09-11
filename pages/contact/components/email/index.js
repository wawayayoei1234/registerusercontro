import { Box } from '@mui/material'
import React from 'react'
import Styles from '../../css/contact.module.css'
import Container from '@mui/material/Container';
import Link from 'next/link';

function index() {
  return (
    <>
    <Container sx={{display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mt:"50px"}} maxWidth="false">
            <Box display="flex">
            <Box sx={{mr:10}}></Box>
            <Box sx={{fontFamily:"Segoe UI",fontSize:"16px",color:"secondary.main"}}>Sale@authweiler.com</Box>
        </Box>
        </Container>

        <Container sx={{display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', mt:"30px"}} maxWidth="false">
        <Box display="flex">
        <Box sx={{mr:1}}></Box>
        <Box sx={{fontFamily:"Segoe UI",fontSize:"14px",color:"secondary.main"}}>Sale@authweiler.com</Box>
    </Box>
    </Container>
    </>
  )
}

export default index