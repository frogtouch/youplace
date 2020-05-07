import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from '../../store/ducks/users/types';
import { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';

/* Tipagens de funções e estados do redux */
interface StateProps {
  users: User[]
}

interface DispatchProps {
  loadUsersRequest(): void
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps

const mapStateToProps = (state: ApplicationState) => ({
  user: state.users.data,
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(UsersActions, dispatch)

const Board = (/* props: Props */) => {

/*   useEffect(() => {
    const { loadUsersRequest } = props

    loadUsersRequest()
  }); */

  /* const { users } = props; */

  return(

    <div>
      <h1 style={{color: "#000"}}>Hello World</h1>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);