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
import twitter from '@/assets/img/twitter.png'
import dropbox from '@/assets/img/dropbox.png'
import googledrive from '@/assets/img/googledrive.png'
import instagram from '@/assets/img/instagram.png'
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
         <TabPanel value={value} index={3}>
          <Box sx={{ fontFamily:styledata[0].font,fontSize: '90px',fontWeight: 700,color: '#ffffff',position: 'absolute',top:"120px",mx:"-20px"}}>Syncronization</Box>
            <Box sx={{ width:"450px",display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3",display:"flex" }}>
              <Box sx={{position:"absolute",mx:-5,mt:3}}><Image alt="twitter" src={twitter} width={30} height={"auto"} sx={{mx:2}}></Image></Box>
              <label>TWITTER</label>
            </Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff"}}><label>Auto-retweet all my posts.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3",display:"flex" }}>
              <Box sx={{position:"absolute",mx:-5,mt:3}}><Image alt="twitter" src={dropbox} width={30} height={"auto"} sx={{mx:2}}></Image></Box>
              <label>DROPBOX</label>
             </Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Sync files from Dropbox.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3",display:"flex" }}>
              <Box sx={{position:"absolute",mx:-5,mt:3}}><Image alt="twitter" src={googledrive} width={30} height={"auto"} sx={{mx:2}}></Image></Box>
              <label>GOOGLE DRIVE</label>
             </Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Sync files from Google Drive.</label></Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#c0c4c3",display:"flex" }}>
              <Box sx={{position:"absolute",mx:-5,mt:3}}><Image alt="twitter" src={instagram} width={30} height={"auto"} sx={{mx:2}}></Image></Box>
              <label>INSTAGRAM</label>
             </Box>
             <Box sx={{ fontFamily:styledata[0].font,fontSize: '20px', color: "#ffffff" }}><label>Share all my photos to Instagram.</label></Box>
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