import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://app.sportdataapi.com/api/v1/soccer/leagues',
//   headers: {
//     "apikey": "47a36c40-6f1f-11ec-bf32-dd169f675b0a"
//   }
// };

// api-key: 25fcfade854311573b25e7f4c3c9685b81a63f81a07d27e7b2dc892051f794c4

export const res = axios.get("https://swapi.dev/api/people/").then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});

console.log(res);