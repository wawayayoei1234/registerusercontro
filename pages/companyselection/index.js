import React, { useEffect, useState } from 'react';
import {  FormControlLabel, Radio, RadioGroup, Button, Box } from '@mui/material';
import { styledata } from '../../data/styledata';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Link from 'next/link';
import Layout from  '../../components/layout'
import Footer from '../accountregistration/components/footer'
import { useRouter } from 'next/router';
import Login from '@/service/login';
import Allgroup from '@/service/getallgroup';
import LinearProgress from '@mui/material/LinearProgress';
import Title from '@/components/title'
import Router from 'next/router';


function Index() {
  const [state, setState] = useState({detail:[],token: [],allgroup:[],radiochang:"",email:"",matchingemail:"",});    



  const handleRadioChange = (event) => {
    setState(prevState => ({ ...prevState, radiochang: event.target.value }));
  };

  const handleallgroup = (isFetched) => {
    setState(prevState => ({...prevState,allgroup: isFetched,}));
  };

  const handleToken = (isToken) => {
    setState(prevState => ({ ...prevState, token: isToken }));
};

  const router = useRouter();
  
  const getGroupIdByEmail = (email) => {
    const group = state.allgroup.find(group => group.name === `@${email.split('@')[1]}`);
    return group ? group.id : null;
  };

  const groupId = getGroupIdByEmail(state.email);
  
  useEffect(() => {
    const email = router.query.email || "";
    setState(prevState => ({ ...prevState, email: email }));
  }, [router.query.email]);

  useEffect(() => {
    if (state.token.length > 0 && groupId) {
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

  const submitemail = () => {
   
    if (state.radiochang === "select1") {
      Router.push({
        pathname: '/userregistration',
        query: { email: state.email }
      })
    } else {
      Router.push({
        pathname: '/userregistration',
        query: { email: false }
      })
      }      
    }
  

  

  return (
    <Box sx={{ background: 'linear-gradient(#B3B5B4, #ffffff)' }}>
    <Login setToken={handleToken} />
    <Allgroup setallgroup={handleallgroup} />
    <Title namepage="Company" company="Authweiler"/>


    {/* // &PC */}
    <Box sx={{display:{xs:"none",md:"flex"},flexDirection:"column",minHeight: '100vh', justifyContent: 'center',  position: 'relative'}}>
    {state.detail.length === 0 ? (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </Box>
    </Box>
    ) : (
      <>
      <Box sx={{paddingLeft:10}}>
        <Box sx={{ fontFamily:styledata[0].font,fontSize: '50px',color:"primary.main",}}>COMPANY SELECTION</Box>
        <Box sx={{ fontFamily:styledata[0].font,fontSize: '22px',paddingBottom:4 ,color:"primary.main"}}>Please Take A Look At The Companies Listed Below And Tell Us Whether You Are Working At Any Of Them.</Box>
      </Box>
      <Box sx={{fontFamily:styledata[0].font, paddingLeft:10 }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          value={state.radiochang}
          onChange={handleRadioChange}
          name="radio-buttons-group"
        >
          <FormControlLabel 
            value="select1"     
            control={<Radio fontSize="small"/>} 
            label={<span style={{ fontSize: '20px' }}>Yes! I'm working at one of these companies</span>} />
          <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:2}} style={{ fontSize: '19px',color:'#878787' }}>Please state which company you work for.</Box>

          <FormControlLabel
            value="select1"
            control={<Radio fontSize="small" />}
            label={<span style={{ fontSize: '20px' }}>{state.detail.attributes && state.detail.attributes.fullname? state.detail.attributes.fullname[0]: 'Company Name Not Available'}</span> }/>
          <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:1}} style={{ fontSize: '19px',color:'#878787' }}>{state.detail.attributes && state.detail.attributes.province? `${state.detail.attributes.province[0]}, ${state.detail.attributes.portalcode[0]}`: 'Location Not Available'}</Box>
          <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:2}}style={{ fontSize: '19px',color:'#878787' }}>{state.detail.attributes && state.detail.attributes.country? state.detail.attributes.country[0]: 'Country Not Available'}</Box>
          <FormControlLabel
            value="select2"
            control={<Radio fontSize="small"/>}
            label={<span style={{ fontSize: '20px' }}>No! I'm not working at any companies listed. </span>} />
          <Box sx = {{fontFamily:styledata[0].font,paddingBottom:4,paddingLeft:4}}style={{ fontSize: '19px',color:'#878787' }}>On the next page, you'll need to fill in a new account registration form.</Box>
        </RadioGroup>
        <Box sx={{ paddingLeft: 0.1 }}>
          <Button onClick={() => {
               if (state.radiochang === "") {
                 alert("Please select someone.");
               }else{
                 submitemail();
               }
             }} variant="contained" color="primary" sx={{textTransform:'capitalize'}}>
            Next <ArrowCircleRightOutlinedIcon />
          </Button>
        </Box >
        </Box> 
        </>
         )}
    </Box>
    {/* //pc */}
    {/* //mobile */}
          <Box padding={3} sx={{display:{xs:"flex",md:"none"},flexDirection:"column",minHeight: '100vh', justifyContent: 'center'}}>
          {state.detail.length === 0 ? (
      <Box sx={{ width: '100%' }}>
      <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
      <LinearProgress />
    </Box>
    </Box>
    ) : (
      <>
        <Box>
          <Box paddingLeft={3} sx={{ fontFamily:styledata[0].font,fontSize: '24px',color:"primary.main",}}>COMPANY SELECTION</Box>
        </Box>
        <Box paddingLeft={3} sx={{ fontFamily:styledata[0].font,fontSize: '12px',paddingBottom:4 ,color:"primary.main"}}>
          Please Take A Look At The Companies Listed Below<br/> 
          And Tell Us Whether You Are Working At Any Of Them. 
        </Box>
        <Box paddingLeft={3} sx={{ fontFamily:styledata[0].font, display: 'flex', flexDirection: 'column'}}>
          <RadioGroup value={state.radiochang}
          onChange={handleRadioChange}
          >
                <FormControlLabel 
                  value="select1" 
                  control={<Radio fontSize="small" />} 
                  label={<span style={{ fontSize: '15px'}}>Yes! I'm working at one of these companies</span>} />
                <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:2}} style={{ fontSize: '14px',color:'#878787'  }}>Please state which company you work for.</Box>

                <FormControlLabel
                  value="select1"
                  control={<Radio fontSize="small" />}
                  label={<span style={{ fontSize: '15px' }}>{state.detail.attributes && state.detail.attributes.fullname? state.detail.attributes.fullname[0]: 'Company Name Not Available'} </span> }/>
                <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:1}} style={{ fontSize: '14px',color:'#878787'  }}>{state.detail.attributes && state.detail.attributes.province? `${state.detail.attributes.province[0]}, ${state.detail.attributes.portalcode[0]}`: 'Location Not Available'}</Box>
                <Box sx={{fontFamily:styledata[0].font,paddingLeft:4,paddingBottom:2}}style={{ fontSize: '14px',color:'#878787'  }}>{state.detail.attributes && state.detail.attributes.country? state.detail.attributes.country[0]: 'Country Not Available'}</Box>
                
                <FormControlLabel
                  value="select2"
                  control={<Radio fontSize="small" />}
                  label={<span style={{ fontSize: '15px' }}>No! I'm not working at any companies listed. </span>} />
                <Box sx = {{fontFamily:styledata[0].font,paddingBottom:4,paddingLeft:4}}style={{ fontSize: '14px',color:'#878787'  }}>On the next page, you'll need to fill in a new account registration form.</Box>
                </RadioGroup>
                <Box sx={{justifyContent:'left'}}>
                
          <Button onClick={() => {
               if (state.radiochang === "") {
                 alert("Please select someone.");
               }else{
                 submitemail();
               }
             }}  variant="contained" color="primary" sx={{borderRadius:"10px",textTransform:'capitalize'}}>
            Next <ArrowCircleRightOutlinedIcon />
          </Button>
          </Box>
        </Box>
        </>
         )}
        </Box>
        <Layout containerheight="auto" templaterow="0fr auto 0fr" templateareas="'nav' 'content1' 'footer'" 
      mtemplaterow="0fr auto 0fr" mtemplateareas="'nav' 'content1' 'footer'"
      footer={<Box><Footer/></Box>}
      />
          </Box>    
  );
}

export default Index;

