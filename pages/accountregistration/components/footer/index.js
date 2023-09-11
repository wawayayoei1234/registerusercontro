import { Box } from '@mui/material'
import { styledata } from 'data/styledata'
import React from 'react'


function index() {
  return (
    <Box  sx={{ fontFamily: styledata[0].font, color: "primary.main", fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    Copyright © 2023 AuthWeiler. All Rights Reserved.
    </Box>
  )
}

export default index
