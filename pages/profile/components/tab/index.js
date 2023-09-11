import { Box, Typography } from '@mui/material';
import React from 'react'

function index (props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Box role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16,p:5,width:"auto",height:"auto" }}>
          {children}
        </Box>
        
        )}
      </Box>
    );
  }

export default index