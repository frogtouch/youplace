/**
 * Buscar dados da API => Saga is merely a way to describe business logic in a declarative way
 */

import { call, getContext, put } from 'redux-saga/effects';
import { gql } from 'apollo-boost';

import { loadUsersSucess, loadUsersFailure } from './actions';

const query = gql`
  query {
    users {
      id
      username
    }
  }
`;

export function* loadUsers() {
  //Tratar essa função
  try{
    const client = yield getContext('client');
    const { data: { users } } = yield call(client.query, { query, fetchPolicy: 'no-cache' });
    
    yield put(loadUsersSucess(client.data));

    return users;
  }catch(err){

    yield put(loadUsersFailure());

  }

}
