import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import {section2} from '@/data/section2data'
import { styledata } from '@/data/styledata'
import Divider from '@mui/material/Divider';
import styles from '../../../welcome/css/welcome.module.css' 
import Loginreview from '@/assets/img/loginreview.png'
import OpenID from '@/assets/img/AuthWeiler-icon-OpenID-Connect.png'


function Index() {
  return (
      
      <div>
      {/* //^PC */}
      <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, flexDirection: "column",mt:3 }}>
        
        {/* //!Section1 */}
          <Box sx={{width:"100%",color:"#fff",justifyContent:"center",display:"flex"}}>
          <Box width="10%"></Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
                <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}}>{section2[0].heading1}</Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail1_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail1_2}</Box> 
                </Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail1_3}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail1_4}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail1_5}</Box>
                </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4}}/>
           </Box>
            <Box width="10%" sx={{flexGrow:1}}></Box>
              <Image className={styles.image2} alt='loginreview' src={Loginreview} priority={true}></Image>
            <Box width="10%"></Box>
          </Box>

          {/* //*Section2 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",mt:3}}>
            <Box width="10%"></Box>
            <Image className={styles.imageopenid} alt='loginreview' src={OpenID} priority={true}></Image>
            <Box sx={{width:"5%"}}></Box>
            <Box display="flex" justifyContent="center" alignItems="flex-start" flexDirection="column">
            <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "45px",fontWeight:700}}>{section2[0].heading2}</Box>
            <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail2_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail2_2}</Box> 
            </Box>
            <Box sx={{mt:3}}>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail2_3}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail2_4}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "25px"}}>{section2[0].detail2_5}</Box>
            </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4,mb:3}}/>
            </Box>
            <Box width="10%"></Box>
          </Box>
          <Box sx={{mt:10}}></Box>
        </Box>
        {/* //^PC */}

        {/* //&Mobile */}
      <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, flexDirection: "column" }}>
        {/* //!Section1 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
                <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "25px",fontWeight:700}}>{section2[0].heading1}</Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail1_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail1_2}</Box> 
                </Box>
                <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail1_3}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail1_4}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail1_5}</Box>
                </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4}}/>
           </Box>
            <Box sx={{mt:3}}></Box>
              <Image className={styles.image2mobile} alt='loginreview' src={Loginreview} priority={true}></Image>
          </Box>

          {/* //*Section2 */}
          <Box sx={{width:"100%",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",mt:3}}>
            <Box width="10%"></Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" textAlign="center">
            <Box sx={{color:"homepage.main",fontFamily:styledata[0].font,fontSize: "20px",fontWeight:700}}>{section2[0].heading2}</Box>
            <Box sx={{mt:3}}>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail2_1}</Box>
                  <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail2_2}</Box> 
            </Box>
            <Box sx={{mt:3}}>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail2_3}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail2_4}</Box>
               <Box sx={{color:"secondary.main",fontFamily:styledata[0].font,fontSize: "12px"}}>{section2[0].detail2_5}</Box>
            </Box>
                <Divider width="100%" sx={{backgroundColor:"homepage.main",mt:4}}/>
            </Box>
            <Box width="10%"></Box>
            <Image className={styles.image2mobile} alt='loginreview' src={OpenID} priority={true}></Image> 
          </Box>
        </Box>
        {/* //&Mobile */}


      </div>
  );
}

export default Index;
