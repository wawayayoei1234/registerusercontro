import React from 'react';
import { Box, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styledata } from '@/data/styledata';
import Link from 'next/link';

function index() {
  return (
    <Box sx={{background: 'linear-gradient(#B3B5B4, #ffffff)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <Box style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box  paddingBottom={3} sx={{fontFamily:styledata[0].font,fontWeight: 'bold'}}>
          Register Complete
        </Box>
        <CheckCircleOutlineIcon style={{ width: "25%", height: "auto", color: "green" }} />
        <Box paddingTop={4}>
            
            <Link    href='/login'>
            <Button variant="contained" style={{textTransform:"capitalize"}} >Back To Login </Button>
          </Link>
            </Box>
      </Box>
      </Box>
      <footer  >
        <Box sx={{fontSize:"10px",fontFamily:styledata[0].font,}}>Copyright © 2023 AuthWeiler. All Rights Reserved.</Box>
        </footer>
    </Box>
    
  );
}

export default index;
