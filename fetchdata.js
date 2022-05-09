const axios = require('axios') 

const key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJoNW8zN3pjN0pZSm9aWUR5ektXV3ppQ05lbFRZbFZNaGc4OUZIUElvMGpMM0JWU3ZaNyIsImp0aSI6IjIwOGY5YzFiYjI2YTMwYjUxMzBlMTAxOWU5MTJmZWFhMDBmZjFkZjQxMWVjNTRkMTgyNjg5YTUwMTNlY2Y4YmRiOGRiYTRkOGJkMmRiM2YyIiwiaWF0IjoxNjUyMTAyMTk1LCJuYmYiOjE2NTIxMDIxOTUsImV4cCI6MTY1MjEwNTc5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.W0UexScdLmWi3VO9L1G-1NJZ1XSxPgFdZtHS7s0u3vSsr2vWwT8PZbfBuwSz162-VeccZxeGUVUvEd5joXAADaGHQYof9vZIkBHckPVc2OXGwRO7q4cYm5IAAm8_pWHLiewc6eG33j1CSffPKNcwcZptzlCmyQJSINBC5sQNtZjhDB-wAijXV3Hga4o7dWN2oBHNlFrFi88_91ZQA27FovgHDG6cYytv0s9nivg1nlBw428hToXmqOGnTedhA66M2fQzTogF_FKw8LGKc9ZUXLk2CIMC46yllRSm56_uK-i7sHmmNs-0a6pxkaODAd-Y4_4ol3cHXapXO5usf05eDA"



const getToken = axios
      .get("https://api.petfinder.com/v2/animals", {
        headers: { Authorization: `Bearer ${key}` }
      })
      .then((res) => {
        console.log(res.data.animals); //sets Joke
      })
      .catch((error) => {
        console.log(error);
      });