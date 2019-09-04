import { connect } from 'react-redux';
import App from '../App';

//Actions ?
import { fetchUsersAction } from '../actions';

const mapStateToProps = (state) => {   
    return {        
        users: state.UserReducers.users,
        loading: state.UserReducers.loading,
        error: state.UserReducers.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchUsers: () => {         
            dispatch(fetchUsersAction());
        }
    };
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default UserContainer;