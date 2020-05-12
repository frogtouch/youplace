import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from '../../store/ducks/users/types';
import { ApplicationState } from '../../store';

import * as UsersActions from '../../store/ducks/users/actions';

//Styles
import { Container } from './styles';

//Components
import Header from '../../components/Header';
import FindHomes from '../../components/FindHomes'

//Images
import homeImage from '../../assets/home-image/modern-fitness.jpg';

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

const Home = (/* props: Props */) => {

/*   useEffect(() => {
    const { loadUsersRequest } = props

    loadUsersRequest()
  }); */

  /* const { users } = props; */

  return(

    <Container>
      <Header />
      <img src={homeImage} alt="home-image" />
      <h3>Seu Imóvel com certeza está aqui!</h3>
      <FindHomes />
    </Container>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);