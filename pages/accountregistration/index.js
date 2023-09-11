import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../accountregistration/components/navbar'
import Footer from '../accountregistration/components/footer'
import Body from '../accountregistration/components/body'
import Layout from  '../../components/layout'

function Index() {
  return (
    
<Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      
      nav={<Box><Navbar/></Box>}
      Content1={<Box><Body/></Box>}
      footer={<Box><Footer/></Box>}
      />
  )
}

export default Index