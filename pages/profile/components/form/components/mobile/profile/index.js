import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { styledata } from '@/data/styledata'
import Image from 'next/image'
import iconprofile from '@/assets/img/AuthWeiler-icon user 2.png'
import Iconcamera from '@/assets/img/AuthWeiler-icon camera.png';
import TabPanel from '../tab'
import Iconview from '@/assets/img/AuthWeiler-icon Themes.png';
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
      <TabPanel value={value} index={0}>
      <Box sx={{ fontFamily:styledata[0].font,fontSize: '46px',fontWeight: 700,color: '#ffffff',mt:-4,mx:5}}>ProFile </Box>

      <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",mt:2}}>
      <Image alt="iconprofile" className='iconprofile' src={iconprofile}></Image>
      <Box sx={{mt:-2}}  display="flex" >
          <IconButton sx={{}} color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <Image alt="image" className='iconcamera' src ={Iconcamera}  />
             </IconButton>
           </Box>

       <Box sx={{width:"80%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",mb:5}}>
        <TextField sx={{ label: { fontSize: '20px',color:"#cdd0d4" },input: { height: '18px' } }} label="User" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),}} variant="standard" style={{ width: '100%', height: '50px' }}></TextField>
        <TextField sx={{ label: { fontSize: '20px',color:"#cdd0d4" },input: { height: '18px' } }} label="Email" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),}} variant="standard" style={{ width: '100%', height: '50px' }}></TextField>
        <TextField sx={{ label: { fontSize: '20px',color:"#cdd0d4" },input: { height: '18px' } }} label="Password" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),endAdornment: (
              <InputAdornment position="end">
                <Box sx={{mt:-1,mx:1}}><Image alt="Iconview" src={Iconview} width={15} height={"auto"}></Image></Box>
                <Button variant="contained" color="inherit" 
                sx={{ mt:-1,fontSize:"10px",fontFamily:styledata[0].font,color:"homepage.main",borderRadius:"0px",textTransform: 'none', height: '20px',width:'100px' }} 
                onClick={() => {console.log('Change Password button clicked');handleClickOpen(); }}>
                  Change Password
                </Button>
              </InputAdornment>)}} variant="standard" style={{ width: '100%', height: '50px' }}></TextField>
        <TextField sx={{ label: { fontSize: '20px',color:"#cdd0d4" },input: { height: '18px' } }} label="Location" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),}} variant="standard" style={{ width: '100%', height: '50px' }}></TextField>
        <TextField sx={{ label: { fontSize: '20px',color:"#cdd0d4" },input: { height: '18px' } }} label="Phone" InputProps={{ startAdornment: (<InputAdornment position="start"> {/* <AccountCircle /> */} </InputAdornment>),}} variant="standard" style={{ width: '100%', height: '50px' }}></TextField>
       </Box>
      </Box>
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
      </TabPanel>
    </div>
  )
}

export default index