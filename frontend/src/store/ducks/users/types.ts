/**
 * Action types
 */
export enum UsersTypes {
  LOAD_USERS_REQUEST = '@users/LOAD_REQUEST',
  LOAD_USERS_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_USERS_FAILURE = '@users/LOAD_FAILURE'
};

/**
 * DataTypes => Formato da informação que vai estar dentro do reducer
 */
export interface User {
  id: number;
  username: string;
}

/**
 * State Types => Formato do estado armazenado no reducer || readonly => estado imutavel
 */
export interface UsersState {
  readonly data: User[],
  readonly loading: boolean,
  readonly error: boolean
}