import React from 'react';
import Image from 'next/image';
import {Avatar, Box,Button,FormControlLabel,Grid,IconButton,Switch,Tab,Tabs,TextField,Typography,} from '@mui/material';
import Icon1 from '../../../../assets/img/AuthWeiler-profile icon 1.png';
import Icon2 from '../../../../assets/img/AuthWeiler-profile icon 2.png';
import Icon3 from '../../../../assets/img/AuthWeiler-profile icon 3.png';
import Icon4 from '../../../../assets/img/AuthWeiler-profile icon 4.png';
import Iconproflie from '../../../../assets/img/AuthWeiler-icon user 2.png';
import Iconcamera from '../../../../assets/img/AuthWeiler-icon camera.png';
import Iconview from '../../../../assets/img/AuthWeiler-icon Themes.png';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TabPanel from '../tab'
import { styledata } from '@/data/styledata'
import { AccountCircle, PhotoCamera } from '@mui/icons-material';
import Profile from './components/profile'
import Privacy from './components/privacy'
import Notification from './components/notification'
import Syncronization from './components/syncronization'
export default function Index() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true);};
  const handleChange = (event, newValue) => {setValue(newValue);};
  const handleClose = () => {setOpen(false);};

  return (
    <Box sx={{   display: { xs: "none", md: "flex" },flexDirection: 'column'}}> 
    <Box sx={{ display: 'flex',flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center', marginTop: 12 }}>
      <Box sx={{  display: 'flex', height: "100%" , width: "60%", justifyContent: 'center', alignItems: 'center' }}>
        {/* //&Icon Tab */}
        <Box>
        <Tabs indicatorColor="homepage" orientation="vertical" value={value} onChange={handleChange}>
           <Tab label={<Image className="tabimg" src={Icon1} alt="Image for Item One" width={30} height={"auto"}/>} 
             sx={{ backgroundColor: value === 0 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image src={Icon2} alt="Image for Item Two" width={30} height={"auto"}/>}
             sx={{ mt:4,backgroundColor: value === 1 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image src={Icon3} alt="Image for Item Three" width={30} height={"auto"}/>}
             sx={{ mt:4,backgroundColor: value === 2 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image src={Icon4} alt="Image for Item Four" width={30} height={"auto"}/>}
             sx={{ mt:4,backgroundColor: value === 3 ? 'homepage.main' : 'transparent' }} />
        </Tabs>
        </Box>
        <Box sx={{ bgcolor: 'rgba(255, 255, 255, 0.5)', flexGrow: 1, padding: '20px', flexDirection: 'flex',height:"400px" }}>
        {/* //&Icon Tab */}

        {/* //!Profile */}
          <Profile value={value} setValue={setValue}/>
        {/* //!Profile */}
        {/* //*Privacy */}
          <Privacy value={value} setValue={setValue}/>
        {/* //*Privacy */}
        {/* //^Notification */}
        <Notification value={value} setValue={setValue}/>
        {/* //^Notification */}
        {/* //&Notification */}
        <Syncronization value={value} setValue={setValue}/>
        {/* //&Notification */}
        <Button sx={{ backgroundColor:"homepage.main",fontFamily:styledata[0].font,fontSize:"20px",borderRadius:"0px",mt:5,mx:-2,textTransform: 'uppercase',transition: 'transform 0.2s','&:hover': { transform: 'scale(1.1)', backgroundColor: '' },width: 120,height: 50}}variant="contained">save</Button> 
        </Box>
       </Box>     
       <Box sx={{ mt: '20px' }}/>    
    </Box>
    </Box>
    
  );
}
