const axios = require('axios');
require('dotenv').config();


const clientId = process.env.API_KEY
const secret = process.env.API_SECRET 

const dataString = `grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`

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
}).catch(error => {
  console.log(error);
})
}