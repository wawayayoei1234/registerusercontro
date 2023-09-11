import React from 'react'
import Logo from '../../../../assets/img/logo-AuthWeiler.png'
import Container from '@mui/material/Container';
import Image from 'next/image';
import { Box } from '@mui/material';
import Link from 'next/link';

function index() {
  return (
    <>
        <Container sx={{zIndex:1000,display: { xs: 'none', md: 'flex' },position:"absolute", justifyContent: 'space-between', alignItems: 'center', mt:"50px"}} maxWidth="false">
            <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
            <Box sx={{mr:5}}></Box>
            <Link href="/" >
            <Image className='logologin' alt="logo" priority={true} src={Logo}></Image>
            </Link>
        </Box>
        </Container>

        <Container sx={{zIndex:1,display: { xs: 'flex', md: 'none' },position:"absolute", justifyContent: 'space-between', alignItems: 'center', mt:"40px"}} maxWidth="false">
        <Box className="zoomlogo" display="flex" sx={{cursor:"pointer"}}>
        <Link href="/" >
        <Image className='logocontactmobile' alt="logo" priority={true} src={Logo}></Image>
        </Link>
    </Box>
    </Container>
   </>
  )
}

export default index