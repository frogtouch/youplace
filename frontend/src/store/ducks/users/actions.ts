/**
 * Funções que desparam os Types => Serão passados para o reducer e ele fará a mudança dos estados
 */

import { action } from 'typesafe-actions';
import { UsersTypes, User } from './types';

export const loadUsersRequest = () => action(UsersTypes.LOAD_USERS_REQUEST);
export const loadUsersSucess = (data: User[]) => action(UsersTypes.LOAD_USERS_SUCCESS, { data });
export const loadUsersFailure = () => action(UsersTypes.LOAD_USERS_FAILURE);
