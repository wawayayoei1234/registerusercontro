import React from 'react';
import Image from 'next/image';
import {Avatar, Box,Button,FormControlLabel,Grid,IconButton,Switch,Tab,Tabs,TextField,Typography,} from '@mui/material';
import Icon1 from '../../../../assets/img/AuthWeiler-profile icon 1.png';
import Icon2 from '../../../../assets/img/AuthWeiler-profile icon 2.png';
import Icon3 from '../../../../assets/img/AuthWeiler-profile icon 3.png';
import Icon4 from '../../../../assets/img/AuthWeiler-profile icon 4.png';
import { styledata } from '@/data/styledata'
import ProfilePC from './components/pc/profile'
import PrivacyPC from './components/pc/privacy'
import NotificationPC from './components/pc/notification'
import SyncronizationPC from './components/pc/syncronization'

import ProfileM from './components/mobile/profile'
import PrivacyM from './components/mobile/privacy'
import NotificationM from './components/mobile/notification'
import SyncronizationM from './components/mobile/syncronization'
import Title from '@/components/title'
export default function Index() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => { setOpen(true);};
  const handleChange = (event, newValue) => {setValue(newValue);};
  const handleClose = () => {setOpen(false);};


  return (
    <>
    <Title namepage="Profile" company="Authweiler"/>
    {/* //*PC */}
    <Box sx={{   display: { xs: "none", md: "flex" },flexDirection: 'column'}}> 
    <Box sx={{ display: 'flex',flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{  display: 'flex', height: "100%" , width: "60%", justifyContent: 'center', alignItems: 'center' }}>
        {/* //&Icon Tab */}
        <Box>
        <Tabs indicatorColor="homepage" orientation="vertical" value={value} onChange={handleChange}>
           <Tab label={<Image src={Icon1} alt="Image for Item One" width={30} height={"auto"}/>} 
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
          <ProfilePC value={value} setValue={setValue}/>
        {/* //!Profile */}
        {/* //*Privacy */}
          <PrivacyPC value={value} setValue={setValue}/>
        {/* //*Privacy */}
        {/* //^Notification */}
        <NotificationPC value={value} setValue={setValue}/>
        {/* //^Notification */}
        {/* //&Notification */}
        <SyncronizationPC value={value} setValue={setValue}/>
        {/* //&Notification */}
        <Button sx={{ backgroundColor:"homepage.main",fontFamily:styledata[0].font,fontSize:"20px",borderRadius:"0px",mt:3,mx:-2,textTransform: 'uppercase',transition: 'transform 0.2s','&:hover': { transform: 'scale(1.1)', backgroundColor: '' },width: 120,height: 50}}variant="contained">save</Button> 
        </Box>
       </Box>
       <Box sx={{ mt: '20px' }}/>
    </Box>
    </Box>


    {/* //?Mobile */}
    <Box sx={{   display: { xs: "flex", md: "none" },flexDirection: 'column'}}> 
    <Box sx={{ display: 'flex',flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'left' }}>
      <Box sx={{  display: 'flex', height: "auto" , width: "90%", justifyContent: 'center', alignItems: 'center','@media (max-width: 400px)': {width:"80%",height: "auto"} }}>
        {/* //&Icon Tab */}
        
        <Tabs sx={{ width:"400px", height: "auto",'@media (max-width: 600px)': {width:"200px",height: "auto"} }} indicatorColor="homepage" orientation="vertical" value={value} onChange={handleChange}>
           <Tab label={<Image className="tabimgM" src={Icon1} alt="Image for Item One" width={30} height={"auto"}/>} 
             sx={{ minWidth:"100%",backgroundColor: value === 0 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image className="tabimgM" src={Icon2} alt="Image for Item Two" width={30} height={"auto"}/>}
             sx={{ minWidth:"100%",mt:4,backgroundColor: value === 1 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image className="tabimgM" src={Icon3} alt="Image for Item Three" width={30} height={"auto"}/>}
             sx={{ minWidth:"100%",mt:4,backgroundColor: value === 2 ? 'homepage.main' : 'transparent' }} />
           <Tab
             label={<Image className="tabimgM" src={Icon4} alt="Image for Item Four" width={30} height={"auto"}/>}
             sx={{ minWidth:"100%",mt:4,backgroundColor: value === 3 ? 'homepage.main' : 'transparent' }} />
        </Tabs>
        
        <Box sx={{borderBottom: '6px solid #00ac7a', bgcolor: 'rgba(255, 255, 255, 0.5)', flexGrow: 1,  flexDirection: 'flex',height:"440px",width:"400%" }}>
        {/* //&Icon Tab */}
        {/* //!Profile */}
          <ProfileM value={value} setValue={setValue}/>
        {/* //!Profile */}
        {/* //*Privacy */}
          <PrivacyM value={value} setValue={setValue}/>
        {/* //*Privacy */}
        {/* //^Notification */}
        <NotificationM value={value} setValue={setValue}/>
        {/* //^Notification */}
        {/* //&Notification */}
        <SyncronizationM value={value} setValue={setValue}/>
        {/* //&Notification */}
        <Button sx={{ backgroundColor:"homepage.main",fontFamily:styledata[0].font,fontSize:"16px",borderRadius:"0px",mt:2,textTransform: 'uppercase',transition: 'transform 0.2s','&:hover': { transform: 'scale(1.1)', backgroundColor: '' },width: "25%",height: 35}}variant="contained">save</Button> 
        </Box>
       </Box>     
       <Box sx={{ mt: '20px' }}/>    
    </Box>
    </Box>
    </>
  );
}
