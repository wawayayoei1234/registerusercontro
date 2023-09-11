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
import TabPanel from '../../../../tab'
import { styledata } from '@/data/styledata'
import CloseIcon from '@mui/icons-material/Close';

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
        {value===0&&(
          <Box  sx={{ mt:-12,fontFamily:styledata[0].font,fontSize: '90px',fontWeight: 700,color: '#ffffff'}}>ProFile</Box>
         )}
        <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
          <Image alt="image" src ={Iconproflie} width={180} height='auto' sx={{ position: 'absolute', top: '100px',  }} />
          <IconButton className="iconbutton" color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <Image alt="image" src ={Iconcamera} width={30} height='auto' />
             </IconButton>
           </Box>
          </TabPanel>
          {/* //^Profile */}
          <Dialog open={open} onClose={handleClose}>
          <Box sx={{display:"flex",justifyContent:'right'}}>
                  <IconButton onClick={handleClose} style={{ maxWidth: '300px' }}>
                    <CloseIcon />
                  </IconButton>
                </Box>
              <DialogContent sx={{overflow:"hidden",padding:"3"}}>
                <DialogContentText  paddingLeft={3}>

                  <Box sx={{ fontFamily: styledata[0].font, minHeight: '1' ,padding:'1' }}>
                    <Box mb={1} sx={{ fontFamily: styledata[0].font, minHeight: '1', }}> CHANGE PASSWORD</Box>
                    - Password cannot contain User Name.<br />
                    - Password must be at least 8 characters long.<br />
                    - Password must contain at least 1 letter and 1 digit.
                  </Box>
                </DialogContentText>
                <Box marginBottom={1} marginTop={4} ml={3}> 
                  <Box  sx={{ fontWeight: 'bold', fontFamily: styledata[0].font, minHeight: '1', fontSize: '11px', mb: '1px' }}>E-mail Address</Box>
                  </Box>
                  <Box ml={3}>
                  <TextField size='small' sx={{ width: '100%', maxWidth: '300px' }} />
                  </Box>
                <Box marginBottom={1} ml={3}> 
                  <Box style={{ fontWeight: 'bold', fontFamily: styledata[0].font, minHeight: '1', fontSize: '11px' }}>Current Password</Box>
                  </Box>
                  <Box ml={3}>
                  <TextField size='small' sx={{ width: '100%', maxWidth: '300px' }} />
                  </Box>
                  <Box marginBottom={1} ml={3}> 
                  <Box style={{ fontWeight: 'bold', fontFamily: styledata[0].font, minHeight: '1', fontSize: '11px' }}>New Password</Box>
                  </Box>
                  <Box ml={3}>
                  <TextField size='small' sx={{ width: '100%', maxWidth: '300px' }} />
                  </Box>
                <Box marginBottom={1} ml={3}> 
                  <Box style={{ fontWeight: 'bold', fontFamily: styledata[0].font, minHeight: '1', fontSize: '11px' }}>Confirm Password</Box>
                  </Box>
                  <Box ml={3}>
                  <TextField size='small' sx={{ width: '100%', maxWidth: '300px' }} />
                  </Box>
              </DialogContent>
              <DialogActions sx={{ justifyContent: 'flex-start' }}>
                <Box sx={{ ml: 4 }}>
                  <Button variant="contained" onClick={handleClose}
                    sx={{transition:"transform 0.2s","&:hover":{transform:'scale(1.1)',backgroundColor:"four.main"},
                      backgroundImage: "linear-gradient(to top, #184f30,#257a4a)",
                      textTransform: 'capitalize', mb: 3, ml: 1
                    }}>
                    Update Password
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" onClick={handleClose}
                    sx={{transition:"transform 0.2s","&:hover":{transform:'scale(1.1)',backgroundColor:"four.main"},
                      backgroundImage: "linear-gradient(to top, #184f30,#257a4a)",
                      textTransform: 'capitalize', mb: 3
                    }}>
                    Cancel
                  </Button>
                </Box>
              </DialogActions>
            </Dialog>
    </div>
  )
}

export default index