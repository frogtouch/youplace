import { Reducer } from 'redux';
import { UsersState, UsersTypes } from './types';

const INITIAL_STATE: UsersState  = {
  data: [],
  error: false,
  loading: false
};

/* Trabalhando com os estados */
const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UsersTypes.LOAD_USERS_REQUEST:
        return { ...state, loading: true };
    case UsersTypes.LOAD_USERS_SUCCESS:
        return { ...state, data: action.data, loading: false };
    case UsersTypes.LOAD_USERS_FAILURE:
        return { ...state, loading: false, error: action.error, data: [] };
    default:
        return state;
  }
}

export default reducer;