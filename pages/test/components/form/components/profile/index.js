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
import TabPanel from '../../../tab'
import { styledata } from '@/data/styledata'

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
        <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ fontFamily:styledata[0].font,fontSize: '90px',fontWeight: 700,color: '#ffffff',position: 'absolute',top:"120px",mx:"-20px"}}>ProFile</Box>
          <TextField  sx={{ label: { fontSize: '26px',color:"#cdd0d4" },input: { height: '30px' } }} label="User" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),}} variant="standard" style={{ width: '450px', height: '50px' }}/>
          <TextField sx={{ label: { fontSize: '26px',color:"#cdd0d4" },mt:2}} label="Email" InputProps={{ startAdornment: (<InputAdornment position="start">{/* <AccountCircle /> */}</InputAdornment>),}} variant="standard" style={{ width: '450px', height: '50px' }}/>
          <TextField sx={{ label: { fontSize: '26px',color:"#cdd0d4" },mt:2}}  label="Password"  variant="standard" style={{ width: '450px', height: '50px', marginTop: '16px' }}
            InputProps={{ 
              startAdornment: (<InputAdornment position="start">{/*<AccountCircle/>*/}</InputAdornment>),
              endAdornment: (
              <InputAdornment position="end">
                <Box sx={{mt:-1,mx:3}}><Image alt="Iconview" src={Iconview} width={20} height={"auto"}></Image></Box>
                <Button variant="contained" color="inherit" 
                sx={{ mt:-1,fontFamily:styledata[0].font,color:"homepage.main",borderRadius:"0px",textTransform: 'none', height: '25px',width:'130px' }} 
                onClick={() => {console.log('Change Password button clicked');handleClickOpen(); }}>
                  Change Password
                </Button>
              </InputAdornment>),}}/> 
          <TextField sx={{ label: { fontSize: '26px',color:"#cdd0d4" },mt:2}} label="Location" InputProps={{ startAdornment: (<InputAdornment position="start">{/* <AccountCircle /> */}</InputAdornment>),}} variant="standard" style={{ width: '450px', height: '50px' }}/>
          <TextField sx={{ label: { fontSize: '26px',color:"#cdd0d4" },mt:2}} label="Phone" InputProps={{ startAdornment: (<InputAdornment position="start">{/* <AccountCircle /> */}</InputAdornment>),}} variant="standard" style={{ width: '450px', height: '50px' }}/>
          </Box>  
          <Box  display="flex" justifyContent="right" >
          <Image src ={Iconproflie} width={180} height='auto' sx={{ position: 'absolute', top: '100px',  }} />
          <IconButton className="iconbutton" color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <Image src ={Iconcamera} width={30} height='auto' />
             </IconButton>
           </Box>
          </TabPanel>
          {/* //^Profile */}
       <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent>
              <DialogContentText>
                - Password cannot contain User Name.<br />
                - Password must be at least 8 characters long.<br />
                - Password must contain at least 1 letter and 1 digit.
              </DialogContentText>
              <Box paddingTop={5}></Box>
              <label>Email Address</label>
              <br />
              <TextField sx={{ width: '100%', maxWidth: '300px' }} />
              <br />
              <label>Current Password</label>
              <br />
              <TextField sx={{ width: '100%', maxWidth: '300px' }} />
              <br />
              <label>New Password</label>
              <br />
              <TextField sx={{ width: '100%', maxWidth: '300px' }} />
              <br />
              <label>Confirm Password</label>
              <br />
              <TextField sx={{ width: '100%', maxWidth: '300px' }} />
            </DialogContent>
            <DialogActions sx={{ justifyContent: 'flex-start' }}>
              <Button variant="contained" onClick={handleClose}>
                Update Password
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
    </div>
  )
}

export default index