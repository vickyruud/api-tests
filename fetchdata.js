const axios = require('axios');
require('dotenv').config();


const clientId = process.env.API_KEY
const secret = process.env.API_SECRET 



let accessToken = ''


const getToken = () => {  
  axios.post("https://api.petfinder.com/v2/oauth2/token", {
  // eslint-disable-next-line @typescript-eslint/camel case
  client_id: clientId,
  // eslint-disable-next-line @typescript-eslint/camel case
  client_secret: secret,
  // eslint-disable-next-line @typescript-eslint/camel case
  grant_type: "client_credentials"
}).then(res => {
  accessToken = res.data.access_token;
  getData();

}).catch(error => {
  console.log(error);
})
}

const getData = () => {
  console.log(accessToken);
  axios
  .get("https://api.petfinder.com/v2/animals", {
    headers: { Authorization: `Bearer ${accessToken}` }
  })
  .then((res) => {
    console.log(res.data.animals); 
  })
  .catch((error) => {
      console.error('error');
    });
    
}
  
getToken();
