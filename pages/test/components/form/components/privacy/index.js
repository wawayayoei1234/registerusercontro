import React from 'react';
import Image from 'next/image';
import {Avatar, Box,Button,FormControlLabel,Grid,IconButton,Switch,Tab,Tabs,TextField,Typography,} from '@mui/material';
import Iconproflie from '@/assets/img/AuthWeiler-icon user 2.png';
import Iconcamera from '@/assets/img/AuthWeiler-icon camera.png';
import Iconview from '@/assets/img/AuthWeiler-icon Themes.png';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TabPanel from './components/tab'
import { styledata } from '@/data/styledata'
import { styled } from '@mui/material/styles';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 99,
  height: 37,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    padding: 2,
    margin: 3.5,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(56px)',
      color: '#00ac7a',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#fff',
        opacity: 1,
        border: "2px solid #B3B5B4",
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26,
    margin:2
  },
  '& .MuiSwitch-track': {
    borderRadius: 36 / 2,
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
         {/* //^Profile */}
         <TabPanel value={value} index={1}>
          <Box sx={{ fontFamily:styledata[0].font,fontSize: '90px',fontWeight: 700,color: '#ffffff',position: 'absolute',top:"120px",mx:"-20px"}}>Privacy</Box>
            <Box sx={{ width:"450px",display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3" }}><label>Public Profile</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Allow everyone to see your profile.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3" }}><label>Location</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Allow the app to use your location.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3" }}><label>Discoverability</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Allow people to find you by phone number.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3" }}><label>Messages</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Allow everyone to send you private messages.</label></Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.4px'}}>
              <Box sx={{ visibility: 'hidden' }}>.</Box>
              <Box><FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></Box>
              <Box sx={{ visibility: 'hidden' }}>.</Box>
              <Box><FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></Box>
              <Box sx={{ visibility: 'hidden' }}>.</Box>
              <Box><FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></Box>
              <Box sx={{ visibility: 'hidden' }}>.</Box>
              <Box><FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/></Box>
            </Box>
          
           
          </TabPanel>
          {/* //^Profile */}
       
    </div>
  )
}

export default index