// API
const urlGetUsers = 'https://randomuser.me/api/';

function* getUsersFromApi() {
    // Get data from API
    const response = yield fetch(urlGetUsers)
        .then(res => res.json())
    console.log("res",response)
    return response.results[0]
}

export const Api = {
    getUsersFromApi,
}; 