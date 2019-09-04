import axios from 'axios';
// API
const urlGetUsers = 'https://randomuser.me/api/';

function* getUsersFromApi() {
    // Get data from API
    const res = yield axios.get(urlGetUsers)
        .then(function (response) {
        return response;
      })  
      .catch(function (error) {
        console.log(error);
      })
        console.log(res);
    return res.data.results[0]
}

export const Api = {
    getUsersFromApi,
}; 