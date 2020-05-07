import { all, takeLatest } from 'redux-saga/effects';

import { UsersTypes } from './users/types';
import { loadUsers } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UsersTypes.LOAD_USERS_REQUEST, loadUsers),
  ]);
}
