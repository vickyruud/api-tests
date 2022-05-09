const axios = require('axios') 

const getData = () => {
  axios
  .get("https://api.petfinder.com/v2/animals", {
    headers: { Authorization: `Bearer ${key}` }
  })
  .then((res) => {
    console.log(res.data.anageimals.find(animal => animal.photo != [])); //sets Joke
  })
  .catch((error) => {
      console.log(error);
    });
    
}
  
console.log(getToken());