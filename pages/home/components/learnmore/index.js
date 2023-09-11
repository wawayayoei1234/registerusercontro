import { Box, Container } from '@mui/material'
import React from 'react'
import Btlernmore from '../../../../components/button'
import Link from 'next/link'

function index() {
  return (
        <>
        <Container sx={{ display: { xs: 'none', md: 'flex' }, my:"70px"}}  maxWidth="false">
            <Box sx={{mr:10}}></Box>
        <Box>
           <Link style={{textDecoration:"none"}} href="/login" >
               <Btlernmore btwidth="180px" btheight="65px" fontsize="18px" text="Learn More" maincolor="primary.main" bgcolor="secondary.main" textcolor="primary.main"/>
           </Link>
        </Box>
        </Container>

        <Container sx={{ display: { xs: 'flex', md: 'none' }, my:"70px",justifyContent:"center"}} >
          <Link style={{textDecoration:"none"}} href="/login" >
             <Btlernmore btwidth="110px" btheight="35px" fontsize="13px" text="Learn More" maincolor="primary.main" bgcolor="secondary.main" textcolor="primary.main"/>
          </Link>
        </Container>
        </>
  )
}

export default index