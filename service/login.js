import React, { useEffect } from 'react';

function Login({ setToken  }) {
  useEffect(() => {
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
    .then(result => setToken(result.access_token))
    .catch(error => console.log('error', error));
  }, []);
  
  return (
    <div></div>
  );
}

export default Login;
