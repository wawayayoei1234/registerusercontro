import React, { useEffect, useState } from 'react'
import Login from './login'
import Allgroup from './getallgroup';

function Backupsessionentity({setdataBackups}) {
  const [state, setState] = useState({token: [],allgroup:[],});    
  
  const handleallgroup = (isFetched) => {
        setState(prevState => ({...prevState,allgroup: isFetched,}));
      };

      const handleToken = (isToken) => {
        setState(prevState => ({ ...prevState, token: isToken }));
    };
    

    useEffect(() => {
        if (state.token.length >0 ) {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${state.token}`);
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch("https://idp.authweiler.com/admin/realms/tracthai/groups/3b6cb360-e5ed-426f-82db-6abf0361c055", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
      }, [state.token]);
  return (
    <div>
        <Login setToken={handleToken} />
        <Allgroup setallgroup={handleallgroup} />
    </div>
  )
}

export default Backupsessionentity