import React, { useEffect, useState } from 'react';
import Login from './login';

function Backupsession({ setallgroup }) {
    const [state, setState] = useState({token: [],});

    const handleToken = (isToken) => {
        setState(prevState => ({ ...prevState, token: isToken }));
    };
    
    useEffect(() => {
        if (state.token.length > 0) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${state.token}`);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://idp.authweiler.com/admin/realms/tracthai/groups", requestOptions)
                .then(response => response.json())
                .then(result => 
                  {
                    const data = result.map( group => group.name);
                    setallgroup(result)
                  }
                  )
                .catch(error => console.log('error', error));
        }
    }, [state.token]); 

    return (
        <div><Login setToken={handleToken} /></div>
    );
}

export default Backupsession;
