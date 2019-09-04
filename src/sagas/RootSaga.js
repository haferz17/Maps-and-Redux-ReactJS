import { all } from 'redux-saga/effects';
import { watchFetchUsers } from './UserSaga';

export default function* rootSaga() {
    yield all([
        watchFetchUsers()
    ])             
}