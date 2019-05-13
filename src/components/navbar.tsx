import React from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'redux';

import { Flex, Base } from './styleguide/layout';
import { Title, Body } from './styleguide/text';
import PowerOff from './icons/power-off';
import UserImage from './user-image';

import styled from './styleguide';
import { s0, s2, s4, s5 } from './styleguide/spacing';

export const NAVBAR_HEIGHT = 50;
export const NAVBAR_HEIGHT_PX = `${NAVBAR_HEIGHT}px`;

const NavbarContainer = styled(Flex)`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9998;
  height: ${NAVBAR_HEIGHT_PX};
  background: ${props => props.theme.primaryDark};
  box-shadow: 0 2px 4px ${props => props.theme.shadowStrong};
`;

const PowerOffButton = styled(PowerOff).attrs({
  color: (props: any) => props.theme.secondary,
})`
  cursor: pointer;
`;

// TODO: implement login
interface StateProps {
  isLoggedIn: boolean;
  userId: string;
}

type Props = StateProps;

const Navbar: React.SFC<Props> = (props) => {

  const {
    isLoggedIn,
    userId,
  } = props;

  return (
    <NavbarContainer align="center" justify="space-between" paddingHorizontal={s4}>
      <Link to={isLoggedIn ? '/overview' : '/'}>
        <Title marginBottom={s0} inverted emphasized>iKEA</Title>
      </Link>
      {isLoggedIn && (
        <Flex align="center">
          <Link to={`/users/${userId}`}>
            <Flex align="center" marginRight={s5}>
              <Base marginRight={s2}>
              <UserImage imgSrc={'userImg'} imgSize="32"/>
              </Base>
              <Body inverted>{'data.userById.username'}</Body>
            </Flex>
          </Link>
          <PowerOffButton onClick={() => console.log('Implement Log out')} />
        </Flex>
      )}
    </NavbarContainer>
  );
};

export default compose<React.ComponentType>()(Navbar);