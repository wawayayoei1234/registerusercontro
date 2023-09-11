import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, FormControlLabel, IconButton, InputAdornment, Switch, TextField } from '@mui/material'
import React from 'react'
import { styledata } from '@/data/styledata'
import Image from 'next/image'
import iconprofile from '@/assets/img/AuthWeiler-icon user 2.png'
import Iconcamera from '@/assets/img/AuthWeiler-icon camera.png';
import TabPanel from '../tab'
import Iconview from '@/assets/img/AuthWeiler-icon Themes.png';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 65,
  height: 23,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: 6,
    margin: 1,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(36px)',
      color: '#00ac7a',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#fff',
        opacity: 1,
        
        border: "2px solid #B3B5B4",
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 13,
    height: 13,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    border: "2px solid #B3B5B4",
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function index({value, setValue}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true);};
  const handleClose = () => {setOpen(false);};

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabPanel value={value} index={1}>
      <Box sx={{ fontFamily:styledata[0].font,fontSize: '46px',fontWeight: 700,color: '#ffffff',mt:-4,mx:5}}>Privacy</Box>
      <Box sx={{ mb:6.5,p:2,width:"100%",display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#c0c4c3" }}><label>Public Profile</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#ffffff" }}><label>Allow everyone to see your profile.</label></Box>
             <Box><FormControlLabel control={<IOSSwitch sx={{mb:1}} defaultChecked />}/></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#c0c4c3" }}><label>Location</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#ffffff" }}><label>Allow the app to use your location.</label></Box>
             <Box><FormControlLabel control={<IOSSwitch sx={{ mb:1 }} defaultChecked />}/></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#c0c4c3" }}><label>Discoverability</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#ffffff" }}><label>Allow people to find you by phone number.</label></Box>
             <Box><FormControlLabel control={<IOSSwitch sx={{ mb:1 }} defaultChecked />}/></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#c0c4c3" }}><label>Messages</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '14px', color: "#ffffff" }}><label>Allow everyone to send you private messages.</label></Box>
             <Box><FormControlLabel control={<IOSSwitch sx={{ mb:1 }} defaultChecked />}/></Box>
            </Box>

       
      </TabPanel>
    </div>
  )
}

export default index