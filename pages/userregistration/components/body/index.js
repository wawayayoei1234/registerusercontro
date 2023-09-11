import React, { useEffect, useState } from 'react';
import { Box, TextField, Grid, Button, Select, MenuItem, Dialog, DialogTitle, DialogActions, CircularProgress, InputLabel } from '@mui/material';
import { styledata } from '../../../../data/styledata';
import ReCAPTCHA from "react-google-recaptcha";
import Login from '@/service/login';
import Allgroup from '@/service/getallgroup';
import { useRouter } from 'next/router';
import LinearProgress from '@mui/material/LinearProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Router from 'next/router';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Index() {
  const router = useRouter();
  const [data, setdata] = useState({firstname:"",lastname:"",jobtitle:"",email:"",mobile:"",companyname:"",address:"",city:"",address2:"",state:"",postalcode:"",country:"",partner:""});
  const [state,setState] = useState({status:0,complete:false,loading:false,open:false,detail:[],token:[],countryNames:[],role:[],allgroup:[],email:""})

  const handleallgroup = (isFetched) => {
    setState(prevState => ({...prevState,allgroup: isFetched,}));
  };

  const handleToken = (isToken) => {
    setState(prevState => ({ ...prevState, token: isToken }));
};


  useEffect(() => {
    const email = router.query.email || "";
    setState(prevState => ({ ...prevState, email: email }));
  }, [router.query.email]);

  const getGroupIdByEmail = (email) => {
    const group = state.allgroup.find(group => group.name === `@${email.split('@')[1]}`);
    return group ? group.id : null;
  };

  const groupId = getGroupIdByEmail(state.email);
  
  useEffect(() => {
    const email = router.query.email || "";
    setState(prevState => ({ ...prevState, email: email||"" }));

    if (router.query.email === "false") {
      setState(prevState => ({ ...prevState, detail: [undefined] || "" }));
    }
  }, [router.query.email]);

  useEffect(() => {
    if (state.token.length > 0 && groupId && state.email!=="false") {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${state.token}`);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
  
      fetch(`https://idp.authweiler.com/admin/realms/tracthai/groups/${groupId}`, requestOptions)
        .then(response => response.json())
        .then(result =>     setState(prevState => ({ ...prevState, detail: result })))
        .catch(error => console.log('error', error));
    }
  }, [state.token, groupId]);

useEffect(()=>{
  if(state.token.length>0)
  {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${state.token}`)
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("https://idp.authweiler.com/admin/realms/tracthai/roles", requestOptions)
    .then(response => response.json())
    .then(result => {
      const data=result.map(role=>role.name);
      setState(prevState => ({ ...prevState, role: data }));
    })
    .catch(error => console.log('error', error));
  }
},[state.token.length]);

  useEffect(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://restcountries.com/v3.1/all", requestOptions)
    .then(response => response.json())
    .then(data => {
      const countryNames = data.map(country => country.name.common);
      setState(prevState => ({ ...prevState, countryNames: countryNames }));

    })
    .catch(error => console.log('error', error));
}, []);

const register=()=>{
setState(prevState => ({ ...prevState, loading: true }));
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", `Bearer ${state.token}`)

var raw = JSON.stringify({
  "enabled": true,
  "email": state.email !=="false"? state.email : data.email,
  "firstName": data.firstname,
  "lastName": data.lastname,
  "attributes": {
    "jobtitle": data.jobtitle,
    "partnerrole": data.partner,
    "mobilephone":data.mobile,
    "address": state.email !=="false" ? state.detail.attributes?.province?.[0] || '': data.address,
    "address2": data.address2,
    "country": state.email !=="false"? state.detail.attributes && state.detail.attributes.country? state.detail.attributes.country[0]: '': data.country,
    "state": data.state,
    "city": data.city,
    "postol code": state.email !=="false" ? state.detail.attributes && state.detail.attributes.portalcode? state.detail.attributes.portalcode[0]: '' : data.postalcode,
    "companyname": state.email !=="false" ? state.detail.attributes?.fullname?.[0] || '' : data.companyname 
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
  setState(prevState => ({ ...prevState, status: response.status }));
  if (response.status === 201) {
    setState(prevState => ({ ...prevState, loading: false,open:true }));
  }else if(response.status === 409){
    setState(prevState => ({ ...prevState, loading: false,open:true }));
  }
  return response.json();
})

  .then(result => console.log(result.status))
  .catch(error => console.log('error', error));

}
  const [recaptchaValue, setRecaptchaValue] = useState(null); 
  function handleSubmit(e) {
    e.preventDefault();
    if (recaptchaValue) {
    } else {
      alert("Please complete the reCAPTCHA.");
    }
  }

  function handleClose() {
    setState(prevState => ({ ...prevState, open: false,complete:true }));
  }

  return (
    // pc
  <Box  sx={{ background: 'linear-gradient(#B3B5B4, #ffffff)' }}>
    <Login setToken={handleToken} />
    <Allgroup setallgroup={handleallgroup} />
    <Box  sx={{display:{xs:"none",md:"flex"},flexDirection:"column", justifyContent: 'center',lastname:"" }}>
    {state.detail.length === 0 ? (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </Box>
    </Box>
    ) : (
      <>
      {state.complete === true ? (
      <Box sx={{ width:"100%",height:"90vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
        <Box sx={{mb:2,}}>Register Complete</Box>
        <CheckCircleOutlineIcon style={{width:"5%",height:"auto",color:"green"}}/>
        <Button sx={{borderRadius:"15px",mt:2,textTransform:"capitalize"}} variant="contained" onClick={()=>{ 
          Router.push({
          pathname: '/login',
         })}} autoFocus>Back to login</Button>
      </Box>
    ) : (
      <>
        <Box>
        <Box sx={{ fontFamily:styledata[0].font, fontSize: '25px', paddingLeft:20,color:'#5a5959',mt:3 }}>USER REGISTRATION</Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingTop:0.5,paddingBottom:3,paddingLeft:20, fontSize: '15px', color:'#5a5959' }}>Please fill in the form. All fields marked with (*) shall be required</Box>
        <Box sx={{ fontFamily:styledata[0].font, fontSize: '25px',paddingLeft:20, color:'#5a5959'  }}>PERSONAL INFORMATION</Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingTop:0.5,paddingBottom:3, fontSize: '15px',paddingLeft:20, color:'#5a5959'  }}>Please provide us with your contact details below.</Box>
        </Box> 
          <Grid container spacing={4} alignItems="center" paddingLeft={20} paddingRight={20} >
            <Grid item xs={12} md={6} >
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font,minHeight:'1',color:'#545353' }}>* First Name</Box>
              <TextField size='small' id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, firstname: e.target.value }))}}/>
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Job Title</Box>
              <TextField size='small'  variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, jobtitle: e.target.value }))}} />
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* E-mail Address</Box>
              <TextField disabled={state.email !=="false"&&state.email!==""} 
               value={state.email !== "false" ? state.email ? state.email : '' : undefined}
               defaultValue={state.email === "false" ? state.email ? "" : '' : undefined}
               size='small' id="password" variant="outlined" required fullWidth
               onChange={(e) => {
                 if (state.email !== "false") {
                   setState((prevState) => ({ ...prevState, email: state.email }));
                 } else {
                   setdata((prevState) => ({ ...prevState, email: e.target.value }));
                 }
               }}
             />
            </Grid> 
            <Grid item xs={12} md={6}>
            <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Last Name</Box>
              <TextField size='small' id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, lastname: e.target.value }))}} />
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>*Partner Role</Box>
              <Select label="* partnerrole" sx={{ width: '100%' }} size='small' value={data.partner || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, partner: e.target.value })) }}>
              {state.role.map (role => (
                  <MenuItem key={role} value={role}>
                    {role}
                    </MenuItem>
                ))}
              </Select>
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}> * Mobile Number</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, mobile: e.target.value }))}} />
            </Grid>
          </Grid>
          <Box sx={{ fontFamily:styledata[0].font, paddingTop:3, fontSize: '25px',paddingLeft:20,color:'#545353' }}>COMPANY ADDRESS INFORMATION</Box>
          <Box sx={{ fontFamily:styledata[0].font, paddingTop:1, paddingBottom:2, fontSize: '15px',paddingLeft:20,color:'#545353' }}>Please make the necessary changes if your address differs from the address of your company’s headquarters.</Box>
          <Box fontSize={10} p={1} sx={{ fontWeight: 'bold',paddingLeft:20,paddingRight:20,fontFamily:styledata[0].font,color:'#545353' }}>
            * Company Name
            <TextField size='small' 
            value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.fullname ? state.detail.attributes.fullname[0] : '' : undefined}
            defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.fullname ? state.detail.attributes.fullname[0] : '' : undefined}
            disabled={state.email !=="false"&&state.email!==""}  variant="outlined" required fullWidth 
            onChange={(e) => {
              if (state.email !== "false") {
                setState((prevState) => ({ ...prevState, companyname: state.detail.attributes?.fullname?.[0] || ''}));
              } else {
                setdata((prevState) => ({ ...prevState, companyname: e.target.value }));
              }
            }}
            />
          </Box>
          <Grid container spacing={2} alignItems="center" paddingLeft={20} paddingRight={20} >
            <Grid item xs={12} md={6}>
          
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address
              </Box>
                <TextField size='small' disabled={state.email !=="false"&&state.email!==""} 
                value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.province ? state.detail.attributes.province[0] : '' : undefined}
                defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.province ? state.detail.attributes.province[0] : '' : undefined}
                id="address1" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address: e.target.value }))}} />
              
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>* Country</Box>
              {state.email === "false" ? (
               <Select
                 label="* Country"
                 sx={{ width: '100%' }}
                 size='small'
                 defaultValue={state.detail.attributes && state.detail.attributes.country ? state.detail.attributes.country[0] : ''}
                 onChange={(e) => {
                  setdata((prevState) => ({ ...prevState, country: e.target.value }));
                 }}
               >
                 {state.countryNames.map(countryName => (
                   <MenuItem key={countryName} value={countryName}>
                     {countryName}
                   </MenuItem>
                 ))}
               </Select>
             ) : (
               <>
               <Select label="* Country" value="test" sx={{ width: '100%' }} size='small' disabled>
                 <MenuItem value="test">
                 {state.detail.attributes && state.detail.attributes.country ? state.detail.attributes.country[0] : ''}
                 </MenuItem>
               </Select>
               </>
             )}

              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * City
              </Box>
                <TextField size='small' id="city" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, city: e.target.value }))}}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Address2
              </Box>
                <TextField size='small' id="address2" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address2: e.target.value }))}} />
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * State
              </Box>
                <TextField size='small' id="state" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state: e.target.value }))}}/>
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
                * Postal Code
              </Box>
                <TextField   disabled={state.email !=="false"&&state.email!==""} size='small' 
                value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.portalcode ? state.detail.attributes.portalcode[0] : '' : undefined}
                defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.portalcode ? state.detail.attributes.portalcode[0] : '' : undefined} 
                id="postalCode" variant="outlined" required fullWidth 
                onChange={(e) => {
                  if (state.email !== "false") {
                    setState((prevState) => ({ ...prevState, postalcode: state.detail.attributes && state.detail.attributes.portalcode? state.detail.attributes.portalcode[0]: '' }));
                  } else {
                    setdata((prevState) => ({ ...prevState, postalcode: e.target.value }));
                  }
                }}
                />
            </Grid>
          </Grid>
          <Box  paddingLeft={20} paddingTop={2 } onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px' }}>
        <div className='recapcha'> <ReCAPTCHA sitekey="6LfRmsonAAAAAJSLlP94Usn7pF-wxKmThaITpV_c"
        onChange={(value) => setRecaptchaValue(value)} size="normal"/>   
        </div>
        <Button onClick={register}
        style={{backgroundImage: "linear-gradient(to top, #184f30,#247748", textTransform: 'capitalize', " & :hover": { transform: "scale(1.1)", backgroundColor: "four.main" } }}
        variant="contained"
        type="submit"
      >
          {state.loading ? <CircularProgress style={{color:"#fff"}}/>:'submit'}
          
      </Button>
      </Box>    
      </>
         )}
      </>
         )}
    </Box>
    <Box>
  </Box>

  

    {/* mobile  */}
    <Box sx={{display:{xs:"flex",md:"none"},pt:2,flexDirection:"column",minHeight: '100vh', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>   
        <Box xs ={{textAlign: 'center',display: 'flex',alignItems: 'center',justifyContent: 'center',height: '110vh',flexDirection:"column",position: 'relative'}}>
        {state.detail.length < 0 ? (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </Box>
    </Box>
    ) : (
      <>
      {state.complete === true ? (
      <Box sx={{ width:"100%",height:"90vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",fontWeight: 'bold',fontFamily:styledata[0].font,color:'#545353' }}>
        <Box sx={{mb:2,}}>Register Complete</Box>
        <CheckCircleOutlineIcon style={{width:"20%",height:"auto",color:"green"}}/>
        <Button sx={{borderRadius:"15px",mt:2,textTransform:"capitalize"}} variant="contained" onClick={()=>{ 
          Router.push({
          pathname: '/login',
         })}} autoFocus>Back to login</Button>
      </Box>
    ) : (
      <>
        <Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingLeft:9, fontSize: '20px',color:'#5a5959' }}>USER REGISTRATION</Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingLeft:9,paddingTop:0.5,paddingBottom:3, fontSize: '10px',color:'#5a5959',   }}>Please fill in the form. All fields marked with (*)<br/>shall be required </Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingLeft:9, fontSize: '20px',color:'#5a5959'  }}>PERSONAL INFORMATION</Box>
        <Box sx={{ fontFamily:styledata[0].font, paddingLeft:9,paddingTop:0.5,paddingBottom:3, fontSize: '10px',color:'#5a5959',  }}>Please provide us with your contact details below.</Box>
        </Box>
          <Grid container spacing={4} alignItems="center" paddingLeft={9} paddingRight={9}>
            <Grid item xs={12} md={6} >
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* First Name</Box>
              <TextField size='small' sx={{ width:'100%'}} id="username" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, firstname: e.target.value }))}} />
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* Last Name</Box>
              <TextField size='small'   variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, lastname: e.target.value }))}} />
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* Job Title</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, jobtitle: e.target.value }))}}  />             
            </Grid> 
            <Grid item xs={12} md={6}>
            <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* Partner Role</Box>
            <Select label="* partnerrole" sx={{ width: '100%' }} size='small' value={data.partner || ''} onChange={(e) => { setdata((prevState) => ({ ...prevState, partner: e.target.value })) }}>
              {state.role.map (role => (
                  <MenuItem key={role} value={role}>
                    {role}
                    </MenuItem>
                ))}
              </Select>

              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font }}>* Email Address</Box>
              <TextField size='small' id="username" 
              value={state.email !== "false" ? state.email ? state.email : '' : undefined}
              defaultValue={state.email === "false" ? state.email ? "" : '' : undefined}
              variant="outlined" required fullWidth 
              disabled={state.email !=="false"&&state.email!==""}
              onChange={(e) => {
                if (state.email !== "false") {
                  setState((prevState) => ({ ...prevState, email: state.email }));
                } else {
                  setdata((prevState) => ({ ...prevState, email: e.target.value }));
                }
              }} />
              
                <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* Mobile Number</Box>
              <TextField size='small' id="password" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, mobile: e.target.value }))}}/>
            </Grid>
          </Grid>
          <Box sx={{ fontFamily:styledata[0].font, paddingTop:3, fontSize: '20px',color:'#5a5959',mx:9 }}>COMPANY ADDRESS INFORMATION</Box>
          <Box sx={{ fontFamily:styledata[0].font, paddingTop:1,paddingBottom:2, fontSize: '10px',color:'#5a5959',mx:9   }}>Please make the necessary changes if your address differs from the address of your company’s headquarters.</Box>
          <Box paddingLeft={9} paddingRight={9} fontSize={10} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>
            * Company Name
            <TextField size='small' 
            value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.fullname ? state.detail.attributes.fullname[0] : '' : undefined}
            defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.fullname ? state.detail.attributes.fullname[0] : '' : undefined}
            disabled={state.email !=="false"&&state.email!==""}  
            fullWidth 
            onChange={(e) => {
              if (state.email !== "false") {
                setState((prevState) => ({ ...prevState, companyname: state.detail.attributes?.fullname?.[0] || ''}));
              } else {
                setdata((prevState) => ({ ...prevState, companyname: e.target.value }));
              }
            }}
            />
          </Box >
          <Grid container spacing={2} alignItems="center" paddingLeft={9} paddingRight={9}>
            <Grid item xs={12} md={6}>         
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>
                * Address
              </Box>
                <TextField 
                disabled={state.email !=="false"&&state.email!==""} 
                value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.province ? state.detail.attributes.province[0] : '' : undefined}
                defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.province ? state.detail.attributes.province[0] : '' : undefined}
                size='small' id="address1" variant="outlined" required fullWidth 
                onChange={(e)=>{setdata((prevState) => ({ ...prevState, address: e.target.value }))}} />            
              <Box fontSize={10}p={1} sx={{ fontWeight: 'bold',fontFamily:styledata[0].font }}>
                * Address2</Box>
              <TextField size='small' id="city" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, address2: e.target.value }))}}/>          
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>* Country</Box>
              {state.email === "false" ? (
              <Select label="* Country" sx={{ width: '100%' }} size='small' 
               defaultValue={state.detail.attributes && state.detail.attributes.country ? state.detail.attributes.country[0] : ''}
                 onChange={(e) => {
                  setdata((prevState) => ({ ...prevState, country: e.target.value }));
                 }}
              >
              {state.countryNames.map(countryName => (
                <MenuItem key={countryName} value={countryName}>
                  {countryName}
                </MenuItem>
              ))}
              </Select>
                ) : (
                  <>
                  <Select label="* Country" value="test" sx={{ width: '100%' }} size='small' disabled>
                    <MenuItem value="test">
                    {state.detail.attributes && state.detail.attributes.country ? state.detail.attributes.country[0] : ''}
                    </MenuItem>
                  </Select>
                  </>
                )}
                </Grid>
            <Grid item xs={12} md={6}>
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>
                * State
              </Box>
                <TextField size='small' id="address2" variant="outlined" required fullWidth onChange={(e)=>{setdata((prevState) => ({ ...prevState, state: e.target.value }))}}/>              
              <Box fontSize={10}p={1} sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>
                * City
              </Box>
                <TextField size='small' id="state" variant="outlined" required fullWidth  onChange={(e)=>{setdata((prevState) => ({ ...prevState, city: e.target.value }))}}/>             
              <Box fontSize={10} p={1}sx={{fontWeight: 'bold',fontFamily:styledata[0].font}}>
                * Postal Code
              </Box>
                <TextField disabled={state.email !=="false"&&state.email!==""} size='small' 
                value={state.email !== "false" ? state.detail.attributes && state.detail.attributes.portalcode ? state.detail.attributes.portalcode[0] : '' : undefined}
                defaultValue={state.email === "false" ? state.detail.attributes && state.detail.attributes.portalcode ? state.detail.attributes.portalcode[0] : '' : undefined} 
                id="postalCode" variant="outlined" required fullWidth 
                onChange={(e) => {
                  if (state.email !== "false") {
                    setState((prevState) => ({ ...prevState, postalcode: state.detail.attributes && state.detail.attributes.portalcode? state.detail.attributes.portalcode[0]: '' }));
                  } else {
                    setdata((prevState) => ({ ...prevState, postalcode: e.target.value }));
                  }
                }}
                />
            </Grid>
          </Grid>
          <Box paddingLeft={9} paddingTop={2} paddingBottom={5} >
          <div className='recapcha'> <ReCAPTCHA sitekey="6LfRmsonAAAAAJSLlP94Usn7pF-wxKmThaITpV_c"
        onChange={(value) => setRecaptchaValue(value)} size="normal"/>   
        </div>
            <Button onClick={register}  style={{backgroundImage:"linear-gradient(to top, #184f30,#247748", textTransform:'capitalize',"&:hover":{backgroundColor:"four.main"}}}  variant="contained">{state.loading ? <CircularProgress style={{color:"#fff"}}/>:'submit'}</Button></Box>
            </>
         )}
            </>
         )}
        </Box>
        <Dialog
        open={state.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:'column',pb:2 }}>
        <DialogTitle id="alert-dialog" style={{fontFamily:styledata[0].font}}>
        {state.status===201?"Register Success ":state.status===409?"Email exists with same Email.":""}
        </DialogTitle>
        {state.status===201?(<CheckCircleOutlineIcon style={{width:"25%",height:"auto",color:"green"}}/>):state.status===409?(<HighlightOffIcon style={{width:"25%",height:"auto",color:"red"}}/>):""}
        <DialogActions>
        {state.status===201?(<Button variant="contained" onClick={handleClose} autoFocus>Close</Button>):state.status===409?<Button variant="contained" color="error" onClick={()=>{setState(prevState => ({ ...prevState, open: false}));}} autoFocus>Close</Button>:""}
        </DialogActions>
        </Box>
      </Dialog>
    </Box>
  </Box>
  );
}
export default Index;
