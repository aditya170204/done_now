import {put, takeEvery} from 'redux-saga/effects';
import {USER_LIST, SET_USER_DATA} from './constants';

function* UserList() {
  const url = 'https://dummyjson.com/users';
  const data = yield fetch(url);
  data = yield data.json();
  yield put({type: SET_USER_DATA, data});
}
function* SagaData() {
  yield takeEvery(USER_LIST, UserList);
}

export default SagaData;
