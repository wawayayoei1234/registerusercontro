import React, { useEffect,useState } from 'react';
import { Box, TextField, Grid,Button } from '@mui/material';
import { styledata } from '../../../../data/styledata';
import { Select, MenuItem } from '@mui/material';
import ReCAPTCHA from "react-google-recaptcha";
import Title  from '../../../../components/title'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Index() {
  const [token,settoken]=useState([])
  const [countryNames, setCountryNames] = useState([]);
  const [role,setrole]=useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [status, setstatus] = React.useState(0);
useEffect(()=>{
  if(token.length>0)
  {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`)
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("https://idp.authweiler.com/admin/realms/tracthai/roles", requestOptions)
    .then(response => response.json())
    .then(result => {
      const data=result.map(role=>role.name);
      setrole(data)
    })
    .catch(error => console.log('error', error));
  }
},[token.length]);

  useEffect(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://restcountries.com/v3.1/all", requestOptions)
    .then(response => response.json())
    .then(data => {
      const countryNames = data.map(country => country.name.common);
      setCountryNames(countryNames);
    })
    .catch(error => console.log('error', error));
}, []);


  useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", "admin");
    urlencoded.append("password", "S0lut!0n");
    urlencoded.append("grant_type", "password");
    urlencoded.append("client_id", "react");
    urlencoded.append("client_secret", "gLqQ4P5TwRKNaZJs9WyNtpzMPvTQwUXH");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://idp.authweiler.com/realms/master/protocol/openid-connect/token", requestOptions)
      .then(response => response.json())
      .then(result => settoken(result.access_token))
      .catch(error => console.log('error', error));
  },[]);

  const [data, setdata] = useState({firstname:"",jobtitle:"",email:"",companyphone:"",mobile:"",companyname:"",address:"",address4:"",annualrevenue:"",state2:"",city2:"",city:"",wedsite:"",accountphone:"",lastname:"",address2:"",state:"",postalcode:"",postalcode2:"",country2:"",country:"",partner:"",address3:"",numofemp:"",primary:""});

const register=()=>{
  setLoading(true)
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`)

var raw = JSON.stringify({
  "enabled": true,
  "email": data.email,
  "firstName": data.firstname,
  "lastName": data.lastname,
  "attributes": {
    "title": data.jobtitle,
    "companyphon": data.companyphone,
    "partnerrole": data.partner,
    "mobilenumber":data.mobile,
    "address": data.address,
    "address2": data.address2,
    "country": data.country,
    "state": data.state,
    "city": data.city,
    "postolcode": data.postalcode,
    "companyname": data.companyname,
    "address3": data.address3,
    "address4":data.address4,
    "country":data.country2,
    "state":data.state2,
    "city":data.city2,
    "postalcode":data.postalcode2,
    "acccountphone":data.accountphone,
    "website":data.wedsite,
    "annualrevenue":data.annualrevenue,
    "primaryverticalmarket":data.primary,
    "numberofemployees":data.numofemp,

  },
  "requiredActions": [
    "UPDATE_PASSWORD"
  ]
});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://idp.authweiler.com/admin/realms/tracthai/users", requestOptions)
.then((response) => {
  setstatus(response.status)
  if (response.status === 201) {
    setOpen(true); 
    setLoading(false)
  }else if (response.status === 409) {
    setOpen(true);
    setLoading(false);
  }
  const targetNode = document.getElementById('your-element-id');
const observer = new MutationObserver((mutationsList, observer) => {
    mutationsList.forEach((mutation) => {
        console.log( mutation.type);
    });
});
const config = {
    attributes: true,
    childList: true, 
    subtree: true 
};
observer.observe(targetNode, config);
  return response.text();
})
  .then(result => "")
  .catch(error => console.log('error', error));
}
function handleClose() {
  setOpen(false);
}
  return (
    // pc
  <Box sx={{ background: 'linear-gradient(#B3B5B4, #ffffff)' }}>
    <Title namepage="Registration" company="The Recovery Advisor Company Limited"/>
    <Box>
      <Box>
        <Box sx={{display:{xs:"none",md:"flex"},flexDirection:"column", justifyContent: 'center',lastname:"" }}>                
        <Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          fontSize: '25px', 
          paddingLeft:20,
          color:'#5a5959',
          mt:3 
          }}>ACCOUNT REGISTRATION
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          pt:0.5,
          paddingBottom:3,
          paddingLeft:20, 
          fontSize: '15px', 
          color:'#5a5959' 
          }}>Please fill in the form. All fields marked with (*) shall be required
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          fontSize: '25px',
          paddingLeft:20,
          color:'#5a5959'  
          }}>CONTACT INFORMATION
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          pt:0.5,paddingBottom:3,
          paddingLeft:20, 
          fontSize: '15px',
          color:'#5a5959'  
          }}>Please tell us your contact details.
        </Box>
        </Box> 
          <Grid container spacing={4} alignItems="center" paddingLeft={20} paddingRight={20} >
            <Grid item xs={12} md={6} >
              <Box fontSize={10} p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font,minHeight:'1',color:'#545353' }}>* First Name</Box>
              <TextField multiline  size='small' sx={{ width:'100%',fontFamily:styledata[0].font}} id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, firstname: e.target.value }))}} />
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* title</Box>
              <TextField size='small' title="text" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, jobtitle: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Company Phone</Box>
              <TextField size='small'title="text" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, companyphone: e.target.value }))}} />             
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Mobile Phone</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth    onChange={(e)=>{setdata((prevState) => ({ ...prevState, mobile: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Address</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Country</Box>
              <Select label="* Country" sx={{ width: '100%' }} size='small' value={data.country || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, country: e.target.value })) }}>
              {countryNames.map(countryName => (
                <MenuItem key={countryName} value={countryName}>
                  {countryName}
                </MenuItem>
              ))}
              </Select>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* City</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, city: e.target.value }))}}/>              
            </Grid> 
            <Grid item xs={12} md={6}>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Last Name</Box>
              <TextField size='small' id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, lastname: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Email Address</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, email: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Partner Role</Box>
              <Select label="* partnerrole" sx={{ width: '100%' }} size='small' value={data.partner || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, partner: e.target.value })) }}>
              {role.map (role => (
                  <MenuItem key={role} value={role}>
                    {role}
                    </MenuItem>
                ))}
              </Select>
              <Box fontSize={10} p={1} pt={9.5} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Address2</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address2: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * State/Province</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Postal Code</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, postalcode: e.target.value }))}}/>
            </Grid>
          </Grid>
          <Box sx={{ fontFamily:styledata[0].font, pt:3, fontSize: '25px',paddingLeft:20,color:'#545353' }}>COMPANY ADDRESS INFORMATION</Box>
          <Box sx={{ fontFamily:styledata[0].font, pt:1, paddingBottom:2, fontSize: '15px',paddingLeft:20,color:'#545353' }}>Please make the necessary changes if your address differs from the address of your company’s headquarters.</Box>
          <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',paddingLeft:20,paddingRight:20,fontFamily:styledata[0].font,color:'#545353' }}>
            * Company Name
            <TextField size='small'   fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, companyname: e.target.value }))}} />
          </Box>
          <Grid container spacing={2} alignItems="center" paddingLeft={20} paddingRight={20} >
            <Grid item xs={12} md={6}>

              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address
              </Box>
                <TextField size='small' id="address1" variant="outlined" required fullWidth  onChange={(e)=>{setdata((prevState) => ({ ...prevState, address3: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Country</Box>
              <Select label="* Country" sx={{ width: '100%' }} size='small' value={data.country2 || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, country2: e.target.value })) }}>
              {countryNames.map(countryName => (
                <MenuItem key={countryName} value={countryName}>
                  {countryName}
                </MenuItem>
              ))}
              </Select>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * City
              </Box>
                <TextField size='small' id="address1" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, city2: e.target.value }))}}/>
              
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Account Phone
              </Box>
                <TextField size='small' id="city" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, accountphone: e.target.value }))}}/>

              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> 
              * Website</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, wedsite: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> 
              * Annual Revenue</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, annualrevenue: e.target.value }))}} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address2
              </Box>
                <TextField size='small' id="address2" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address4: e.target.value }))}}/>
              
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * State/Province
              </Box>
                <TextField size='small' id="state" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state2: e.target.value }))}} />
             
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Postal Code
              </Box>
                <TextField size='small' id="postalCode" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, postalcode2: e.target.value }))}} />  
              <Box fontSize={10} p={1} pt={9.5} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Primary Vertical Market</Box>
              <Select label="*Primary Vertical Market " value={data.primary || ''} sx={{ width: '100%' }} size='small'onChange={(e)=>{setdata((prevState) => ({ ...prevState, primary: e.target.value }))}}>
              <MenuItem value="option1">Option 3</MenuItem>
              <MenuItem value="option2">Option 4</MenuItem>
            </Select>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Number of Employees</Box>
              <Select label="* Number of Employees" value={data.numofemp || ''} sx={{ width: '100%' }} size='small'onChange={(e)=>{setdata((prevState) => ({ ...prevState, numofemp: e.target.value }))}}>
              <MenuItem value="option1">Option 3</MenuItem>
              <MenuItem value="option2">Option 4</MenuItem>
            </Select>
            </Grid>
          </Grid>
          <Box pl={20}  pt={2} pb={3} display="flex" flexDirection="row" alignItems="center">
                  <Box  className='recapcha'> <ReCAPTCHA sitekey="6LfRmsonAAAAAJSLlP94Usn7pF-wxKmThaITpV_c"
                    onChange={(value) => setRecaptchaValue(value)} size="normal"/>   
                  </Box>
                  <Box  >
                    <Button onClick={register} style ={{backgroundImage: "linear-gradient(to top, #184f30,#247748",
                  textTransform:'capitalize', transition:"transform 0.2s",
                  "&:hover":{transform:"scale(1.1)",backgroundColor:"four.main"}}} 
                  variant="contained">
                  {loading ? <CircularProgress style={{color:"#ffffff"}}/>:'submit'}</Button>
                      <Dialog
                      open={open}
                      onClose={handleClose}
                    >
                      <Box p={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column' }}>
                      <DialogTitle id="alert-dialog">
                      {status===201?  "Register Success":status===409?"Email exists with same Email.":""}
                      </DialogTitle>
                      {status===201?  <CheckCircleOutlineIcon style={{width:"25%",height:"auto",color:"green"}}/>:status===409?<HighlightOffIcon style={{width:"25%",height:"auto",color:"red"}}/>:""}
                        
                      <DialogActions>
                        <Box pb={1}>
                        
                        {status===201? <Link  href='/registersuccess'> <Button variant="contained" onClick={handleClose} autoFocus>Close</Button> </Link>:status===409?<Button color='error' variant="contained" onClick={handleClose} autoFocus>Close</Button>:""}
                        
                       
                        </Box>
                      </DialogActions>
                      </Box>
                    </Dialog>
              </Box>
          </Box>
            </Box>
            </Box>
          </Box>

    {/* mobile */}

    <Box sx={{display:{xs:"flex",md:"none"},flexDirection:"column", justifyContent: 'center', }}>
        <Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          fontSize: '20px', 
          paddingLeft:9,
          color:'#5a5959',
          mt:3 
          }}>ACCOUNT REGISTRATION
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          pt:0.5,
          paddingBottom:3,paddingLeft:9, 
          fontSize: '10px', 
          color:'#5a5959' 
          }}>Please fill in the form. All fields marked with (*) shall be required
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          fontSize: '20px',
          paddingLeft:9
          , 
          color:'#5a5959'  
          }}>CONTACT INFORMATION
        </Box>
        <Box sx={{ 
          fontFamily:styledata[0].font, 
          pt:0.5,paddingBottom:3, 
          fontSize: '10px',
          paddingLeft:9, 
          color:'#5a5959'  
          }}>Please tell us your contact details.
        </Box>
        </Box> 
          <Grid container spacing={4} alignItems="center" paddingLeft={9} paddingRight={9} >
            <Grid item xs={12} md={6} >
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font,minHeight:'1',color:'#545353' }}>* First Name</Box>
              <TextField multiline  size='small' sx={{ width:'100%',fontFamily:styledata[0].font}} id="username" variant="outlined" required fullWidth  onChange={(e)=>{setdata((prevState) => ({ ...prevState, firstname: e.target.value }))}} />
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Last Name</Box>
              <TextField size='small'  title="text" variant="outlined" required fullWidth  onChange={(e)=>{setdata((prevState) => ({ ...prevState, lastname: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Partner Role</Box>
              <Select label="* partnerrole" sx={{ width: '100%' }} size='small' value={data.partner || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, partner: e.target.value })) }}>
              {role.map (role => (
                  <MenuItem key={role} value={role}>
                    {role}
                    </MenuItem>
                ))}
              </Select>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Mobile Number</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, mobile: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Title</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, jobtitle: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* E-mail Address</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, email: e.target.value }))}}/>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Company Phone</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, companyphone: e.target.value }))}}/>              
            </Grid> 
            <Grid item xs={12} md={6}>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Address</Box>
              <TextField size='small' id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address: e.target.value }))}}/>
              <Box fontSize={10} p={1}  sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Address2</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address2: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* State</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state: e.target.value }))}}/>
              <Box fontSize={10} p={1}  sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Country</Box>
              <Select label="* Country" sx={{ width: '100%' }} size='small' value={data.country || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, country: e.target.value })) }}>
              {countryNames.map(countryName => (
                <MenuItem key={countryName} value={countryName}>
                  {countryName}
                </MenuItem>
              ))}
              </Select>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * City</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, city: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Postal Code</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, postalcode: e.target.value }))}}/>
            </Grid>
          </Grid>
          <Box sx={{ fontFamily:styledata[0].font, pt:3, fontSize: '20px',paddingLeft:9,color:'#545353' }}>COMPANY ADDRESS INFORMATION</Box>
          <Box sx={{ fontFamily:styledata[0].font, pt:1, paddingBottom:2, fontSize: '10px',paddingLeft:9,color:'#545353' }}>Please make the necessary changes if your address differs from the address of your company’s headquarters.</Box>
          <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',paddingLeft:9,paddingRight:9,fontFamily:styledata[0].font,color:'#545353' }}>
            * Company Name
              
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, companyname: e.target.value }))}}/>
          </Box>
          <Grid container spacing={2} alignItems="center" paddingLeft={9} paddingRight={9} >
            <Grid item xs={12} md={6}>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address
            </Box>
                <TextField size='small' id="address1" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address3: e.target.value }))}}/>
              

              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address2
              </Box>
                <TextField size='small' id="address1" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address4: e.target.value }))}}/>
              
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* State</Box>
              <TextField size='small' id="address1" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state2 : e.target.value }))}}/>
              
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Country
            </Box>
            <Select label="* Country" sx={{ width: '100%' }} size='small' value={data.country2 || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, country2: e.target.value })) }}>
              {countryNames.map(countryName => (
                <MenuItem key={countryName} value={countryName}>
                  {countryName}
                </MenuItem>
              ))}
              </Select>
                
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * City
              </Box>
                <TextField size='small' id="city" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, city2: e.target.value }))}}/>
              
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> 
              * Postal Code
              </Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, postalcode2: e.target.value }))}}/>
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> 
              * Acccount Phone
              </Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, accountphone: e.target.value }))}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box fontSize={10} p={1}  sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Website
              </Box>
                <TextField size='small' id="address2" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, wedsite: e.target.value }))}} />
              
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Annual Revenue
              </Box>
                <TextField size='small' id="state" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, annualrevenue: e.target.value }))}}/>
          
              <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Primary Vertical Market</Box>
              <Select label="* Primary Vertical Market" value={data.primary || ''} sx={{ width: '100%' }} size='small'onChange={(e)=>{setdata((prevState) => ({ ...prevState, primary: e.target.value }))}}>
              <MenuItem value="option1">Option 3</MenuItem>
              <MenuItem value="option2">Option 4</MenuItem>
            </Select>
            <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Number of Employees</Box>
              <Select label="* CounNumber of Employeestry" value={data.numofemp || ''} sx={{ width: '100%' }} size='small'onChange={(e)=>{setdata((prevState) => ({ ...prevState, numofemp: e.target.value }))}} >
              <MenuItem value="option1">Option 3</MenuItem>
              <MenuItem value="option2">Option 4</MenuItem>
            </Select>
            </Grid>
          </Grid>
          <Box paddingLeft={9} paddingTop={2}>
          <div  className='recapcha'> <ReCAPTCHA sitekey="6LfRmsonAAAAAJSLlP94Usn7pF-wxKmThaITpV_c"
                  onChange={(value) => setRecaptchaValue(value)} size="normal"/>   
                  </div>
                </Box>  
          <Box paddingBottom={5} pt={2} paddingLeft={9} >
          <Button onClick={register} sx={{textTransform:'capitalize', transition:"transform 0.2s","&:hover":{transform:"scale(1.1)",backgroundColor:"four.main"}}} variant="contained">
            {loading ? <CircularProgress style={{color:"#ffffff"}}/>:'submit'}
            </Button>
            </Box>
          
      </Box>

    </Box>
  );
}

export default Index;
