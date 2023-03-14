import React from 'react';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Classes from './styles.module.scss';

import logo from '../../assets/logo.png';

function Navigation() {
  return (
    <nav className={`${Classes.navigation}`}>
      <Container>
        <div className={`${Classes.navigation__item_wrapper}`}>
          <img
            src={logo}
            alt='lumintu logo'
            className={`${Classes.navigation__logo}`}
          />
          <ul className={`${Classes.navigation__link_container}`}>
            <li className={`${Classes.navigation__link}`}>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/whyChoose'>Why Choose</a>
            </li>
            <li>
              <a href='/clients'>Clients</a>
            </li>
          </ul>
          <Button type={'primary'}>Contact Us</Button>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;
