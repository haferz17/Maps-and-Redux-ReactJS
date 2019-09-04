import { FETCH_USERS, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionType';
const UserReducers = (users = {}, action) => {
    console.log("reducer ",action.receivedUsers)
    switch (action.type) {
        case FETCH_USERS:
            return { loading: true }
        case FETCH_SUCCEEDED:
            return { users: action.receivedUsers, loading: action.loading }
        case FETCH_FAILED:
            return { error: true };
        default:
            return users; //state does not change
    }
}

export default UserReducers;
